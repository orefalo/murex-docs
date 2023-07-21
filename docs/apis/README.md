---
title: APIs
icon: arrows-to-circle
index: true
category:
  - Feature
---

# API Reference

This section is a glossary of APIs.

These APIs are provided for reference for any developers wishing to write
their own builtins. However some APIs are still worth being aware of even
when just writing Murex scripts because they provide a background into
the internal logic of Murex's runtime.

## Pages

- [`Marshal()` (type)](./Marshal.md):
  Converts structured memory into a structured file format (eg for stdio)
- [`ReadArray()` (type)](./ReadArray.md):
  Read from a data type one array element at a time
- [`ReadArrayWithType()` (type)](./ReadArrayWithType.md):
  Read from a data type one array element at a time and return the elements contents and data type
- [`ReadIndex()` (type)](./ReadIndex.md):
  Data type handler for the index, `[`, builtin
- [`ReadMap()` (type)](./ReadMap.md):
  Treat data type as a key/value structure and read its contents
- [`ReadNotIndex()` (type)](./ReadNotIndex.md):
  Data type handler for the bang-prefixed index, `![`, builtin
- [`Unmarshal()` (type)](./Unmarshal.md):
  Converts a structured file format into structured memory
- [`WriteArray()` (type)](./WriteArray.md):
  Write a data type, one array element at a time
- [`lang.ArrayTemplate()` (template API)](./lang.ArrayTemplate.md):
  Unmarshals a data type into a Go struct and returns the results as an array
- [`lang.ArrayWithTypeTemplate()` (template API)](./lang.ArrayWithTypeTemplate.md):
  Unmarshals a data type into a Go struct and returns the results as an array with data type included
- [`lang.IndexTemplateObject()` (template API)](./lang.IndexTemplateObject.md):
  Returns element(s) from a data structure
- [`lang.IndexTemplateTable()` (template API)](./lang.IndexTemplateTable.md):
  Returns element(s) from a table
- [`lang.MarshalData()` (system API)](./lang.MarshalData.md):
  Converts structured memory into a Murex data-type (eg for stdio)
- [`lang.UnmarshalData()` (system API)](./lang.UnmarshalData.md):
  Converts a Murex data-type into structured memory
