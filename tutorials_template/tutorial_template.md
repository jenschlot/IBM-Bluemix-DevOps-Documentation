# Your tutorial title

<Your name>
<Your job title>
<Your email>

---
Welcome to your tutorial.  
Tell the reader why your tutorial is important. What can the reader gain from reading (motive) and doing this tutorial (benefits).

For example, welcome to the Markdown template to create tutorial content. You can use this template as a basis for a new tutorial, 
or use it to help you prepare existing content for a tutorial. This template provides examples of common constructs used in tutorials. 
Following this template can help you create content that is consistent. If you want more information or guidance
you can find it [here][1].

Try to write your content as if you're talking to someone about it. 
Take a look at [text style guidelines][2] for some guidance about that.  

---
# Before you begin
If you are not familiar with markdown you can find all sorts of guidance about it by searching the Internet.
[Here][3] is one for your reference.

---
<a name='section_titles'></a>
# My first section 

Tutorials are structured into sections. Major headings divide each section into logical pieces. 
For tutorials, create a tutorial section title using level 1 headings, as for the title above this paragraph. 

It is a good idea to use short, succinct titles rather than long, verbose ones.

Within each section you'll have several paragraphs of content, perhaps including illustrations, tables and code listings. 

<a name='major_headings'></a>
## My major heading
Sections are comprised of smaller information chunks we'll call major sections, using level 2 headings, as the heading above this paragraph.   

<a name='minor_headings'></a>
### My minor heading
Long major sections can be broken into smaller subsections that we'll call minor sections, using level 3 headings. Create minor headings by using the level 3 heading, as the heading above this paragraph.

Minor headings help organize the content under major headings. 
Within minor sections you can use paragraphs of content, perhaps including illustrations, tables and code listings, as you did for major sections.

---

<a name='lists'></a>
# My first list

The easiest way to create tutorial content with this template is to follow these steps.

The easiest way to create tutorial content with this template is to follow these steps.

1. Copy this template file.
2. Paste this template into the tutorials folder. Then rename the tutorial_template.md to xxxx.md 
where xxx is the name of your tutorial.
3. Add your own content to your tutorial so you can compare it to the content here, 
refering to these instructions as needed.
4. Images go in an images folder inside the tutorial folder. 
5. Validate the Markdown source of each tutorial for acceptable markup as defined in this template
by opening your Markdown file with the **Orion Markdown Viewer**. 
6. Read your tutorial checking for typos and that you are following the guidelines mentioned in the template.
7. When you are ready to deliver your work, remove the instructions, and stage, commit and push it to the master branch. 

That's it!

**Note:** Images must include  /tutorials/tutorial_folder in the path name. 
For example,

>    ![app new title](tutorials/images/app-new-title-sml.png)

Images might not show in the Markdown viewer. If you change the images the changed image will not show in the viewer.

This is because of the difference in the way the tutorial app renders the images when the tutorial is deployed to beta3, QA, PROD versus when looking at the tutorial in the editor.


---

<a name='code_listings'></a>
# My preformatted text

Content often includes small snippets of code or a command within a sentence, 
or longer code listings that are two or more lines of code and set off from the rest of the text.  

You can create inline code using back ticks. For example, to run the program, enter `runme.bat` on the command line.

Indent your code lines as needed by using the space bar.  Use the tab key to show the code
as a code block. And include a caption for your code listing; code listing captions use a Heading 
level 3.

### Listing 1. Sample code listing at maximum width
	|--------10--------20--------30--------40--------50--------60--------70--------80--------|
	CODE LINE 1 HAS 90 CHARACTERS – YOUR LINES MUST BE NO LONGER THAN THIS 0000000000000000000
	CODE LINE 2 – USING 8PT CODE HELPS LONG LINES FIT IN YOUR PAGE.
	   CODE LINE 3
	   CODE LINE 4
	      CODE LINE 5
	CODE LINE 6


---
<a name='figures'></a>
# My figures

Technical graphics such as screen captures, diagrams, and photographs enhance and help explain your content. 
To learn how to create screens, read [screen capture guidelines][4]
Include a caption above the figure. Figure captions use a level 3 heading. 
Your graphics must have alt text to comply with accessibility requirements. 

---

<a name='tables'></a>
# My tables

Tables can help explain your content. 

### Table 1. Caption for your table

|  Column heading 1  |  Column 2 heading  |  Column 3 heading  |
| ------------------ |:------------------:| ------------------:|
| 1234               |right aligned       |              $1600 |
| 5768               |     centered       |         $12        |
| 4444               |left aligned        |$1                  |

---

<a name='links'></a>
# My links 

When you add links to other tutorial content, instead of the text repeating a section or
heading title, make the link text conversational. 

You can link to Web pages, such as the [BlueMix home page][4] or 
to locations in this tutorial, such as [Code listings or preformatted text](tutorials_template#codelistings). 
You can also link to locations in another tutorial. For example, **Note**: If you need to install Git, 
take a look [here][5].

---

<a name='highlighting_conventions'></a>
# Highlighting conventions

When do you use italics, bold, or no highlighting at all? Table 2 shows the highlighting conventions recommended for developerWorks content.

### Table 2. Recommended highlighting

| Highlighted element |	Recommended highlighting | 
|--------------------:|-------------------------:|
| "Article titles"	  | "Quotes"                 |
| Book titles	      | _book title_             |
| Code (inline)       | `code`                   |
| Classes	          | `classes`                |
| Code (block) 	      | Use tab key              |
| Command names	      | `command`                |
| Directory names	  | No highlighting          |
| Emphasis	          | _emphasis_               |
| File names	      | `file name`              |
| Function calls	  | `function call`          |
| GUI controls	      | **Add Git integration**  |
| Window titles       | No highlighting          |
| Dialog titles		  | No highlighting          |
| Keywords            | `keywords`               |
| Message text        | `message text`           |
| Message prompts     | `message prompt`         |
| Methods	          | `methods`                |
| Objects             | `objects`				 |
| Path names          | No highlighting			 |        
| Terms               | _term_					 |
| Text entered by user| `entered text`			 |
| Types (such as int) | `int`					 |
| URLs	              | No highlighting          |
| Variables           | `variable`               |

---
<a name='summary'></a>
# A final note 

Your summary goes here. Put the main points of what you covered and why what you covered is of value. 

You've seen how easy it is to code in markdown for your first tutorial. With a few tags and a few minutes you
can create short tutorial. We hope you give it try. 

---

<a name='whats_next'></a>
# What's next

Interested in learning more about markdown? Take a look at [what is markdown][6].

Need more guidance about creating tutorial content in markdown, read the [tutorial guidelines][1].


---
<a name='feedback'></a>
# Tell us what you think

Thanks for following along. And tell us what you think. What did we do well? 
What can we do better? Post your comments to our [forum][7] 
or send us an [email][8].

<a name='link_definitions'></a>
# Link definitions

<!---
Add your link definitions to the bottom of your document to make it easier to maintain them.
-->

   [1]: tutorials_guidelines
   [2]: https://releaseblueprints.ibm.com/display/CLOUDOE/Cloud+OE+Content+Design#CloudOEContentDesign-BlueMixtextstyleguidelines (BlueMix Style Text Guidelines)
   [3]: http://daringfireball.net/projects/markdown/syntax (daringfireball markdown website)
   [4]: https://releaseblueprints.ibm.com/display/CLOUDOE/Cloud+OE+Content+Design#CloudOEContentDesign-Screencaptures (BlueMix Screen Capture Guidelines)
   [5]: ./../tutorial_clients/tutorial_clients#gitinstall
   [6]: http://whatismarkdown.com/ (whatismarkdown website)
   [7]: https://www.ibmdw.net/answers?community=jazzhub (forum)
   [8]: mailto:hub%40jazz.net

  
   