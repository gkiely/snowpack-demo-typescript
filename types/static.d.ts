/* Use this file to declare any custom file extensions for importing */
/* Use this folder to also add/extend a package d.ts file, if needed. */

/* CSS MODULES */
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.module.sass' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.module.less' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.module.styl' {
  const classes: { [key: string]: string };
  export default classes;
}

/* CSS */
declare module '*.css';
declare module '*.scss';
declare module '*.sass';
declare module '*.less';
declare module '*.styl';

/* IMAGES */
declare module '*.svg' {
  const ref: string;
  export default ref;
}
declare module '*.bmp' {
  const ref: string;
  export default ref;
}
declare module '*.gif' {
  const ref: string;
  export default ref;
}
declare module '*.jpg' {
  const ref: string;
  export default ref;
}
declare module '*.jpeg' {
  const ref: string;
  export default ref;
}
declare module '*.png' {
  const ref: string;
  export default ref;
}

// Fix for Object.keys returning string[] instead of Object.keys()[]
// https://stackoverflow.com/a/65079383/1845423
declare interface ObjectConstructor extends Omit<ObjectConstructor, 'keys' | 'entries'> {
  /**
   * Returns the names of the enumerable string properties and methods of an object.
   * @param obj Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  keys<O extends any[]>(obj: O): Array<keyof O>;
  keys<O extends Record<Readonly<string>, any>>(obj: O): Array<keyof O>;
  keys(obj: object): string[];

  /**
   * Returns an array of key/values of the enumerable properties of an object
   * @param obj Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  entries<T extends { [K: Readonly<string>]: any }>(obj: T): Array<[keyof T, T[keyof T]]>
  entries<T extends object>(obj: { [s: string]: T } | ArrayLike<T>): [string, T[keyof T]][];
  entries<T>(obj: { [s: string]: T } | ArrayLike<T>): [string, T][];
  entries(obj: {}): [string, any][];
}
declare var Object: ObjectConstructor;

import { DOMAttributes } from "react";

// Allow class properties to be used in JSX
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    class?: string;
  }
}
