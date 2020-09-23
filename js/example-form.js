"use strict";
$(document).ready(function () {

    let users = [
        {
            username: 'mdklanica',
            password: 'captainkirk',
            emailaddress: 'mdklanica@gmail.com',
            aboutuser: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius est incidunt modi praesentium' +
                ' reprehenderit similique tempora temporibus vitae voluptate voluptatem! Beatae distinctio fugiat laudantium repudiandae voluptatibus. Blanditiis eaque libero porro.'
        },
        {
            username: 'johnnywaco',
            password: 'mybloodyvalentine',
            emailaddress: 'johnnywaco@gmail.com',
            aboutuser: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius est incidunt modi praesentium' +
                ' reprehenderit similique tempora temporibus vitae voluptate voluptatem! Beatae distinctio fugiat laudantium repudiandae voluptatibus. Blanditiis eaque libero porro.'
        },
        {
            username: 'marcus-marcus',
            password: 'olblockhead',
            emailaddress: 'marcus@yahoo.com',
            aboutuser: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius est incidunt modi praesentium' +
                ' reprehenderit similique tempora temporibus vitae voluptate voluptatem! Beatae distinctio fugiat laudantium repudiandae voluptatibus. Blanditiis eaque libero porro.'
        },
        {
            username: 'mrwenner',
            password: 'pigeonsarecool',
            emailaddress: 'garland@gmail.com',
            aboutuser: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius est incidunt modi praesentium' +
                ' reprehenderit similique tempora temporibus vitae voluptate voluptatem! Beatae distinctio fugiat laudantium repudiandae voluptatibus. Blanditiis eaque libero porro.'
        }
    ]

    $('#main-display').empty()
    let html = "";
    for (let i = 0; i <= users.length - 1; i++) {
        let userName = users[i].username;
        let passWord = users[i].password;
        let emailAddress = users[i].emailaddress;
        let aboutUser = users[i].aboutuser;
        console.log(i, userName, passWord, emailAddress, aboutUser);
        html += `<h2>Username: ${userName}</h2>` +
            `<h3>Email: ${emailAddress}</h3>` +
            `<h4>Password: ${passWord}</h4>` +
            `<p>Bio: ${aboutUser}</p>`
    }

    $("#main-display").append(html);

    $('#add-user').click(function (e) {
        e.preventDefault();
        let userName = $('#user-name').val();
        let emailAddress = $('#email-address').val();
        let passWord = $('#pass-word').val();
        let aboutUser = $('#about-user').val();



    })


});