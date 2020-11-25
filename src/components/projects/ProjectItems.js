export const ProjectItems = [
    {
        title: 'MonitorMe',
        sub: 'A mobile application created in Android Studio.',
        description: 'MonitorMe was a prototype android mobile application designed for my dad after talking to people from his company overseas that had issues with monitoring employees when working in remote locations.  The app would allow the user to create a contact list from the contacts list saved on their phone. They could then select a created contact group, select the job duration, and finally select the job location either from a list of previous saved locations or a new location from a google map. The application would then alert the first member of the selected contact group once the job had started, they had reached their location, and finally once the user had completed or cancelled their job. If the user were to go over their allotted time without canceling their session the application would then message each member of the contact group exclaiming that the user was potentially in need of assistance.',
        images: [
            require('../../assets/images/profile.png'),
            '../../assets/images/profile.png'
        ]
    },
    {
        title: 'Rehabilatation Games',
        sub: 'A Tobii eye tracking games created using Unity',
        description: 'This application was built to try and help with ocular rehabilitation for stroke victims. Created by myself and two other Otago Polytechnic students in our third year as one of our final projects. We worked alongside the head of the occupation therapy school at Otago Polytechnic to come up with a fun way for stroke victims to gain back their ocular mobility. We used Unity and Tobii’s eye tracking hardware to create a series of games that required the user to either trace a moving object across the monitor or focus of a fixed point for a small amount of time. I contributed to this project by creating a version of the arcade game breakout and the card game memory. We were able to test these games with real stroke victims and valuable feedback to implement in future versions. This project was a great way to learn to work as an agile team with real external clients, as well as learn to create documentation so that our project could be picked up by future students.',
        images: [
            require('../../assets/images/profile.png'),
            require('../../assets/images/profile.png')
        ]
    },
    {
        title: 'Oh! Sugar',
        sub: 'A mobile application created in Android Studio.',
        description: 'Oh! Sugar was an Android mobile application created by me and one other Otago Polytechnic student in our second year for our end of year project. This application was initially designed by a group of high school students who came up with the initial idea and UI for the app. The user could look up or scan the barcodes of food items to see the sugar content, then add the item to a shopping list that would keep a running total of the sugar content for the entire list. Users could also look up healthy alternatives for similar food products. This project was a good way to learn how to work with an external client design, practice working with GitHub to collaborate on a project as well as learn how to publish applications to the Google play store. ',
        images: [
            require('../../assets/images/profile.png'),
            require('../../assets/images/profile.png')
        ]
    },
    {
        title: 'Open Trivia Quiz',
        sub: 'A web appliaction created using Django',
        description: 'This is a dynamic web application created as an assignment for one of my programming papers during my time studying. It was developed using the Django Python web framework, the Open Trivia Database RESTful API and a MySQL database. The application allowed an admin user to create tournaments. Each tournament required a name, a start date, and an end date. Each tournament questions were able to be from a specific category with a specific difficulty or random. The application would allow you to sign up a new user and log in. Once logged in the user would be displayed a list of active and upcoming tournaments in which they can participate in once. The users score is recorded throughout each tournament and then displayed to the user after the tournament had been completed. Additionally, the application included a high scores screen where each previous tournament would be shown along with the highest scoring user. This project taught me the basic flow of web frameworks as well as how APIs are created and used. ',
        images: [
            require('../../assets/images/profile.png'),
            require('../../assets/images/profile.png')
        ]
    }
]