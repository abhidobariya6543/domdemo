_Use this as a README.md template when documenting components. If you are creating a new component, you can copy and paste this entire document as a starting point. Please delete this paragraph and everything in square brackets._

# [WIP] [Component name] component

[Write short overview of component's purpose.]

## Last change

[Supply ISO date of the latest document change.]

<span style="color:limegreen;">**2025-01-21**</span>

## Component Type

[Provide a component type: core, part, page, context, utility/helper, config.]

## Description

[Provide a detailed description of the component or of important aspects and additional information if necessary.]

## Props

[Display all props as a table with Name, Type, Default value, and Description as headings.]

| Name        | Type        | Default Value        | Description        |
| ----------- | ----------- | -------------------- | ------------------ |
| [prop name] | [prop type] | [prop default value] | [prop description] |

## Used components

[List all used components and their paths.]

| Component        | Path             |
| ---------------- | ---------------- |
| [component name] | [component path] |

## Used contexts

[List all used contexts and their paths.]

| Context (Hook)                | Path           |
| ----------------------------- | -------------- |
| [context name / context hook] | [context path] |

## Used form fields and validation

[List all used form fields, explain how the form is submitted and provide the path to the validation rules.]

**Required props are marked with `*`.**

[This is an example of form fields directly defined as JSX elements.]

| Field Name   | Type | Name  | Important attributes | Description            |
| ------------ | ---- | ----- | -------------------- | ---------------------- |
| "username"\* | JSX  | input | type="text"          | The username for login |

[This is an example of form fields directly provided as components.]

| Field Name   | Type      | Core Component Name | Important props | Description            |
| ------------ | --------- | ------------------- | --------------- | ---------------------- |
| "username"\* | Component | Text                | type="text"     | The username for login |

[Modify the sample text and add any required details.]

The form uses `Formik` and is submitted via the [function name] function from the [context name] context. If validation fails, error messages are displayed next to the relevant input fields.

Validation is performed using the `Yup` library, with a validation schema provided by the [context name] context.

The validation rules are defined in the [validation file](path/to/validation/file).

## Tests and edge cases

[Provide a brief explanation of special tests, known issues and edge cases.]

## Further reading and references

[Provide links to relevant documentation, articles, or other resources that might help in understanding or extending the component.]
[Links to Redmine tickets or wiki pages, or links to google docs and/or sheets]

This ticket describes the ... flow ...
[Ticket #50xxx](https://rm5.dom.de/path/to/ticket)

## Usage example

[Provide a usage example with code.]

```jsx
<Example title="Example Title" />
```
