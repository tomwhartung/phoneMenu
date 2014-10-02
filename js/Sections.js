/*
 * This file defines the Section object, which contains the content of this application.
 * The Sample Section objects are small, so we define them in this file.
 * If you have one or more very large sections, you may want to define them in a separate file.
 */
"use strict";

/**
 * Use this Minimal Section as the prototype to Object.create() new Section objects
 */
var MinimalSection = Object.create( Object.prototype, {
	id: {
		value: "minimal_section"                // id used in DOM to identify section
	},
	option: {
		value: "Minimal"                        // option text used on phone menu
	},
	title: {
		value: "Minimal Section"                // Section title
	},
	templateIdSelector: {
		value: "#paragraph-section-template"    // Handlebars template (see index.php)
	},
	content: {
		value: "Use this Minimal Section for development and testing, and to make other sections."
	}
});

/**
 * Introduction: In desktop browsers and on tablets, this section appears at top of other sections
 * On phones it is the only section initially displayed.
 */
var Introduction = Object.create( MinimalSection, {
	id: {
		value: "introduction_section"
	},
	option: {
		value: "Introduction"
	},
	title: {
		value: "Introduction"
	},
	templateIdSelector: {
		value: "#paragraph-section-template"
	},
	content: {
		value:
			"This introductory text appears above the other sections in browsers and " +
			"on tablets.  " +
			"On phones, it appears alone, under a Menu button that allows viewing the " +
			"sections one at a time."
	},
});

/**
 * Sample Paragraph Section: for sections that contain a single paragraph
 */
var SampleParagraphSection = Object.create( MinimalSection, {
	id: {
		value: "sample_paragraph_section"
	},
	option: {
		value: "One Paragraph"
	},
	title: {
		value: "Sample Paragraph Section"
	},
	templateIdSelector: {
		value: "#paragraph-section-template"
	},
	bulletPoints: {
		value: null
	},
	content: {
		value:
			"A sample paragraph goes here."
	},
});

/**
 * Sample Paragraph List Section: for sections that contain multiple paragraphs
 */
var SampleParagraphListSection = Object.create( MinimalSection, {
	id: {
		value: "sample_paragraph_list_section"
	},
	option: {
		value: "Paragraphs"
	},
	title: {
		value: "Sample Paragraph List Section"
	},
	templateIdSelector: {
		value: "#paragraph-list-section-template"
	},
	bulletPoints: {
		value: null
	},
	content: {
		value: "",    // content is a list of paragraphs
		configurable: true,
		writable: true
	}
});
SampleParagraphListSection.paragraph_10 = {
	text: "Most paragraphs contain just text.",
};
SampleParagraphListSection.paragraph_20 = {
	text:
		"If you want the paragraph to contain some <span class='bold'>bold text</span>, " +
		"enclose it in a &lt;span class='bold'&gt; tag.  " +
		"For the text to be bolded, the span tag must specify a 'class' attribute that " +
		"includes the 'bold' class.",
};
SampleParagraphListSection.paragraph_30 = {
	text:
		"If you want the paragraph to contain a <a href='example.com' target='_blank'>link,</a> " +
		"enclose it in an anchor (&lt;a&gt;) tag",
};
SampleParagraphListSection.content = [
	SampleParagraphListSection.paragraph_10,
	SampleParagraphListSection.paragraph_20,
	SampleParagraphListSection.paragraph_30,
];

/**
 * Sample Bullet Section
 */
var SampleBulletListSection = Object.create( MinimalSection, {
	id: {
		value: "sample_bullets_section"
	},
	option: {
		value: "Bullet"
	},
	title: {
		value: "Sample Bullet List Section"
	},
	templateIdSelector: {
		value: "#bullet-list-section-template"
	},
	content: {
		value: "",    // content is bullet points
		configurable: true,
		writable: true
	},
});
SampleBulletListSection.point_10 = {
	text: "A bullet point may contain just text",
};
SampleBulletListSection.point_20 = {
	bold: "Bold",
	text: "A bullet point may contain some bold text, followed by normal text",
};
SampleBulletListSection.point_30 = {
	linkHref: "http://example.com",
	linkText: "example.com",
	text: "A bullet point may contain a link, along with an explanation of it",
};
SampleBulletListSection.bulletPoints = [
	SampleBulletListSection.point_10,
	SampleBulletListSection.point_20,
	SampleBulletListSection.point_30,
];

