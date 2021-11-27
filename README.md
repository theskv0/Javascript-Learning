ECMA International   =>    An organization that creates standards to technologies.

ECMA-262    =>    This is a standard published by ECMA International. It contains the specification for general purpose scripting language.

ECMAScript  =>    The specification defined in ECMA-262 for creating a general purpose scripting language. ECMAScript provides the rules, details, and guidelines that a scripting language must observe to be considered ECMAscript compliant.

Synonyms of ECMAScript  =>    ES6, ES2015, and ECMAScript 2015

ES1   =>    1997
ES2   =>    1998
ES3   =>    1999
ES4   =>    Abandoned
ES5   =>    2009
ES6   =>    2015  (Major changes)
ES7   =>    2016
ES8   =>    2017
ES9   =>    2018
ES10  =>    2019
ES11  =>    2020
ES12  =>    2021

<script async src=""></script> async is default
<script defer src=""></script> defer is used to load script in end of document

== exqual to
== identical (also datatype equal)
&& and
|| or
! not
typeof

anonymous function overcome the name conflict between to library or file

<!-- Hoisting -->
In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

<!-- Temporal Dead Zone -->
The var declarations are hoisted and initialized with undefined . ... let and const variables are hoisted too but they cannot be accessed before their declarations. This is called Temporal Dead Zone