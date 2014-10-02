/**
 * This file defines the Content object, which is the main object of this application.
 * Content contains an array of Section objects, which we must print in a specific sequence.
 * All Section objects are defined in a separate file, which should be included before this one.
 */
"use strict";

var Content = { };

/**
 * List the sections to include, in the order in which you want them to appear.
 * When the document has been loaded, the toHtml method is where we actual print them out.
 */
Content.sections = [
	Introduction,
//	MinimalSection,
	SampleParagraphSection,
	SampleParagraphListSection,
	SampleBulletListSection
];
Content.toHtml = function() {
	var thisSection;
	var templateForSection;
	var sectionTemplate;
	var templateForParagraphSection = $("#paragraph-section-template").html();
	var paragraphSectionTemplate = Handlebars.compile( templateForParagraphSection );
	var resumeHtml = "";
	var sectionHtml = "";

	for ( var index = 0; index < Content.sections.length; index++ ) {
		thisSection = Content.sections[index];
		console.log( 'thisSection.id = ' + thisSection.id );
		console.log( 'thisSection.templateIdSelector = ' + thisSection.templateIdSelector );
		if ( thisSection.hasOwnProperty('templateIdSelector') ) {
			templateForSection = $(thisSection.templateIdSelector).html();
			sectionTemplate = Handlebars.compile( templateForSection );     // TODO: inefficient...
			sectionHtml = sectionTemplate( thisSection );
		} else {
			sectionHtml = paragraphSectionTemplate( thisSection );
		}
	//	console.log( "sectionHtml = " + sectionHtml );
		resumeHtml += sectionHtml;
	}
	$('#content').append( resumeHtml );
};

$(document).ready(function() {
//	var id;
	Content.toHtml();
	//
	// If we have a showOnlySection function (i.e., if we are on a phone)
	//   all sections are hidden, so call showOnlySection to show the Introduction
	//
	if ( typeof(showOnlySection) == 'function' ) {
		showOnlySection( Content.sections[0].id );
		togglePhoneMenu();
	}
});
