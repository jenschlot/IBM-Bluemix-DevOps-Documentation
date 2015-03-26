Last modified: 6 February 2015

#Web IDE

##File sharing
- You have convenient access to the project files from the project overview. You can download an entire branch of a project as a single compressed file.
- Also from the project overview, you can share a link to the project through the Facebook link.
- From the editor, you can export files to share by right-clicking a file and clicking **Export** > **Download**.
 
##Searching within folders
In the editor, you can search within a folder to find a file that you are looking for. Select the folder and click **Edit** > **Search in folder**. A window opens over the file tree where you can specify your search. 
 
##Editing files
When editing any file, you can activate a content assist by pressing **Ctrl**+**Space**. The content assistant is available to help you select formatting or content structuring in the context of the language you are editing in.

### Markdown
When you select a Markdown (`.md`) file for editing, it opens in the Orion Markdown Editor. As you work, there is syntax highlighting available and you can see a side-by-side live preview of the rendered HTML as your write. When you are done, you can leave the file in Markdown, or create an HTML file of the Markdown by clicking **Tools** > **Generate HTML file**.

###Programming languages 
The Web IDE provides syntax highlighting for C program (`.c`), C header (`.h`), C++ (`.cpp`) and Arduino (`.pde`,`.ino`) files.

###JavaScript

####Tooling inside HTML script blocks
Much of the JavaScript tooling support is available while working in the HTML editor. Linting support runs on JavaScript code inside of `<script>` tags. Hover over a variable or function to show its occurrences.

####Validation
The linting validation support for JavaScript is built on ESLint. The validator scans your JavaScript files, as well as HTML <script> tags, and add errors or warnings to the margin of the editor. Hover over the messages to view a detailed explanation of the issue.

You can customize the warnings you see by clicking the **Settings** icon and the **JavaScript** tab. Each validation rule can be set to **Error**, **Warning**, or **Ignore**. 

####Scoped code templates
When activating content assist (**Ctrl**+**Space**) the JavaScript tooling support provides many code templates for common code patterns and common library usage. The location you are in is used to scope the proposals so that only applicable code patterns are provided.

####Esprima 
The Esprima parsing library is included, which underpins much of the JavaScript tooling support.