import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import { defaultModules } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';

// defaults.styling = 'material';
// defaults.icons = 'material';

defaultModules.set(PNotifyMobile, {});

// export const matchAlert = alert({
//   text: 'Too many matches found. Please enter a more specific query!',
//   //   type: 'error',
//   delay: 1000,
// });

// export const incorrectError = error({
//   text: 'Incorrect input. Please try again!',
//   type: 'error',
//   delay: 500,
// });

// // Automatically set the type.
// notice({
//   text: "I'm a notice.",
// });

// const myInfo = info({
//   text: "I'm an info message.",
// });

// const mySuccess = success({
//   text: "I'm a success message.",
// });

// const myError = error({
//   text: "I'm an error message.",
// });
