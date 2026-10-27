// Reference: WebGPU Shading Language (WGSL) spec — https://www.w3.org/TR/WGSL/
export default {
  scopeName: "source.wgsl",
  patterns: [
    { include: "#comments" },
    { include: "#attributes" },
    { include: "#function-declaration" },
    { include: "#type-declaration" },
    { include: "#keywords" },
    { include: "#constants" },
    { include: "#builtin-types" },
    { include: "#builtin-functions" },
    { include: "#numbers" },
    { include: "#operators" }
  ],
  repository: {
    comments: {
      patterns: [
        { match: "//.*$", name: "comment.line.double-slash" },
        { begin: "/\\*", end: "\\*/", name: "comment.block" }
      ]
    },
    attributes: {
      match: "@[A-Za-z_]\\w*",
      name: "entity.name.decorator"
    },
    "function-declaration": {
      match: "\\b(fn)\\s+([A-Za-z_]\\w*)",
      captures: { 1: { name: "storage.type.function" }, 2: { name: "entity.name.function" } }
    },
    "type-declaration": {
      match: "\\b(struct|alias)\\s+([A-Za-z_]\\w*)",
      captures: { 1: { name: "storage.type" }, 2: { name: "entity.name.type.class" } }
    },
    keywords: {
      patterns: [
        {
          match: "\\b(?:break|case|continue|continuing|default|discard|else|fallthrough|for|if|loop|return|switch|while)\\b",
          name: "keyword.control"
        },
        {
          match: "\\b(?:const|const_assert|diagnostic|enable|fn|let|override|requires|struct|alias|var)\\b",
          name: "keyword.declaration"
        },
        {
          match: "\\b(?:function|private|read|read_write|storage|uniform|workgroup|write)\\b",
          name: "storage.modifier"
        }
      ]
    },
    constants: {
      match: "\\b(?:true|false)\\b",
      name: "constant.language.boolean"
    },
    "builtin-types": {
      match: "\\b(?:bool|i32|u32|f32|f16|vec[234]|mat[234]x[234]|array|ptr|atomic|sampler|sampler_comparison|texture_(?:1d|2d|2d_array|3d|cube|cube_array|multisampled_2d|depth_2d|depth_2d_array|depth_cube|depth_cube_array|depth_multisampled_2d|external|storage_1d|storage_2d|storage_2d_array|storage_3d))\\b",
      name: "support.type.builtin"
    },
    "builtin-functions": {
      match: "\\b(?:abs|acos|all|any|atan2?|ceil|clamp|cos|cosh|cross|degrees|determinant|distance|dot|exp2?|faceForward|floor|fma|fract|inverseSqrt|length|log2?|max|min|mix|modf|normalize|pow|radians|reflect|refract|round|select|sign|sin|sinh|smoothstep|sqrt|step|tan|tanh|transpose|trunc|dpd[xy]|fwidth|textureSample(?:Level|Compare|CompareLevel|Grad|Bias)?|textureLoad|textureStore|textureDimensions|workgroupBarrier|storageBarrier|atomicLoad|atomicStore|atomicAdd|atomicSub|atomicExchange|bitcast)\\b",
      name: "support.function.builtin"
    },
    numbers: {
      match: "(?<![\\w.])(?:0[xX][0-9a-fA-F]*\\.[0-9a-fA-F]*(?:[pP][+-]?\\d+)?[fh]?|0[xX][0-9a-fA-F]+(?:[pP][+-]?\\d+[fh]?|[iu]?)|(?:\\d+\\.\\d*|\\.\\d+|\\d+)(?:[eE][+-]?\\d+)?[fh]?|\\d+[iu]?)\\b",
      name: "constant.numeric"
    },
    operators: {
      match: "(?:->|&&|\\|\\||==|!=|<=|>=|<<|>>|[+\\-*/%&|^!<>=~]=?)",
      name: "keyword.operator"
    }
  }
};
