# WhatsApp-Web
An ongoing task of creating WhatsApp Web application using a combination of several programming languages

## Table of Contents
- [Description](#description)
- [Screens](#screens)
  - [Login Screen](#login-screen)
  - [Registration Screen](#registration-screen)
  - [Chat Screen](#chat-screen)
- [Technologies Used](#technologies-used)
- [Notes](#notes)
- [Installation and Execution](#installation-and-execution)
- [Authors](#authors)

## Description
This is a chat application that allows users to register, login, and communicate with their contacts in real-time. The project includes a registration screen that validates all fields to ensure they are filled in correctly. The login screen checks that the user is registered and authenticated before granting access to the chat screen. The chat screen includes a list of contacts that can be added, searched, and selected for messaging. Messages are sent and received in real-time using React components and state management. The user interface is designed using HTML, CSS, and Bootstrap 5 to provide a modern and responsive design. While there is no server-side functionality yet, the project provides a solid foundation for building a complete chat application with a server backend. 

## Screens
The project includes the following screens:

### Login Screen
The login screen is the main page of the web application, accessible through the home route. On this screen, users can enter their login credentials and click the "Log in" button to access the chat screen. Users who do not yet have an account can click the "Sign up" button to navigate to the registration screen. The design of the login screen is simple and clean, making it easy for users to quickly access the application. The login form includes input fields for the username and password, with client-side validation to ensure that both fields are filled out before allowing the user to submit the form.

<img width="389" alt="Login Screen" src="https://github.com/IditMedizada/WhatsApp-Web/assets/110912180/bbeef1dd-cd40-4b9a-a7e3-796cf5cf849c"> 


### Registration Screen
The registration screen allows new users to sign up for the chat application. On this screen, users are asked to enter a username, password, display name, and picture. Each field has specific requirements, which are displayed in red under the field when the user clicks on it. Additionally, there is a password verification field to ensure that the user enters the correct password. If the user attempts to register with incomplete or invalid information, an error message is displayed in red at the bottom of the screen indicating the reason they cannot register. The design of the registration screen is similar to the login screen in terms of visibility.

<img width="389" alt="Registration Screen" src="https://github.com/IditMedizada/WhatsApp-Web/assets/110912180/066a12c7-e18b-4d83-b2e9-8c6669a1c4fe">


### Chat Screen
The chat screen consists of two main sections. The first section displays a list of contacts with whom the current user is chatting. Each contact is represented by a photo, nickname, and the last message sent with the date and time it arrived. The list of contacts is interactive, and users can switch conversations by clicking on a specific contact. The design of the contact list is user-friendly and visually appealing, with a different color displayed when hovering or pressing on a contact.

The second section of the chat screen displays the conversation with the selected contact. Users can send messages, and the messages will be displayed with a different design to differentiate between the sent and received messages. The chat screen includes a search bar to find existing contacts quickly, and a button to add a new contact to the list. When the user clicks on the "Add contact" button, a popup window appears, asking for the recipient's username.

Finally, the chat screen includes a logout button that allows the user to go back to the login screen. The chat screen is designed to be intuitive and easy to use, providing a seamless chatting experience for users.

<img width="389" alt="chat Screen" src="https://github.com/IditMedizada/WhatsApp-Web/assets/110912180/46afba4a-ec48-485e-bba0-08b3fa8d877a">

## Notes

* Note that due to the lack of a server, all chats will be deleted whenever the user logs out.
* Upon logging in, a user will be greeted with a welcoming header "Welcome to teamChat!" displayed on the right side of the message area.
* Messages with more than 20 characters will be truncated on the left panel, with the first 20 characters shown followed by an ellipsis (...) to indicate that there is more to the message.
* The pictures for the new contacts is beeing selected randomally from a pool of 5 pictures.

## Technologies Used
The project uses the following technologies:

* HTML
* CSS
* Bootstrap 5
* JavaScript
* Jquery
* React

## installation-and-execution
    
To clone and run this application, you'll need [Git](https://git-scm.com) installed on your computer.
  
From your command line:

  
```bash
# Clone this repository.
$  git clone https://github.com/tomerp1812/WebChat.git

# Go into the repository.
$ cd WhatsApp-Web
$ cd teamchat  
$ npm start
```

## Authors
- [Idit Medizada](https://github.com/IditMedizada)
- [Tomer Peisikov](https://github.com/tomerp1812)
