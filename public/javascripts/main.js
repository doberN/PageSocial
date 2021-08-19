
//mport Chat from './classes/chat.js';
//import User from './classes/user.js';
//import FileSharing from './classes/fileSharing.js';
//import forum from './classes/forum.js';
//import friends from './classes/friends.js';
//import followers from './classes/followers.js';
/***************************************************************************************************************/
/*const panel = document.querySelector('#panel');
import Enrollment from './classes/enrollment.js';

const enrollment = new Enrollment(panel);
enrollment.formSignUp();
    */

import { menu, enrollment, chat, fileSharing, forum, profile, users } from './initAllClasses/init.js'


//enrollment.signUpForm();
//enrollment.loginForm();
//enrollment.resetPasswordform();
//enrollment.updateUserForm()
//chat.chatBox();
//enrollment.updateUserForm();
//fileSharing.fileSharingBox();
//forum.topicForumBox();
//const profileDet = { name:'david', userId:4, image:'data:image/jpeg;base64,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', followers:10, friends:60, posts:200, }
//profile.profileBox(profileDet)
//users.followedBox()
//users.followersBox();
//users.myFriendBox();
menu.menuBox();




