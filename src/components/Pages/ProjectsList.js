import React from "react";
import ProjectItem from "../Pages/ProjectItem/index";
import talentBridge from "../../assets/TalentBridge-02.png";
import weatherDash from "../../assets/WeatherDashboard.png";
import teamProfileGen from "../../assets/teamProfileGen.png";
import passwordGen from "../../assets/passwordGen.png";
import localNewsApp from "../../assets/localNewsApp.png";
import workDayScheduler from "../../assets/WorkDayScheduler.png";

import "../Pages/ProjectsList.css"


function ProjectList(props) {

    const projects = [
        {
            image: talentBridge,
            name: "Talent Bridge",
            description: "TalentBridge is a user-friendly app designed to help you find your dream job quickly and easily.",
            link: "https://talent-bridge-app.herokuapp.com/",
            repo: "https://github.com/GuyJiawei/TalentBridge-App"
        },
        {
            image: weatherDash,
            name: "Weather Dashboard",
            description: "Weather forecast application that lets you check a locations current weather and five-day forecast.",
            link: "https://guyjiawei.github.io/weather-dashboard/",
            repo: "https://github.com/GuyJiawei/weather-dashboard"
        },
        {
            image: teamProfileGen,
            name: "Team Profile Generator",
            description: "Node.js command-line application that takes in information about employees and generates an HTML webpage that displays the user input data.",
            link: "https://github.com/GuyJiawei/team_profile_generator",
            repo: "https://github.com/GuyJiawei/team_profile_generator"
        },
        {
            image: passwordGen,
            name: "Password Generator",
            description: "Application that enables employees to generate random passwords based on criteria that they have selected.",
            link: "https://guyjiawei.github.io/js_password_generator/",
            repo: "https://github.com/GuyJiawei/js_password_generator"
        },
        {
            image: localNewsApp,
            name: "Get Local News and Weather App",
            description: "A website which allows for users to search for local news and weather.",
            link: "https://marwaynemclovin.github.io/Media-and-News-Geolocation/",
            repo: "https://github.com/Marwaynemclovin/Media-and-News-Geolocation"
        },
        {
            image: workDayScheduler,
            name: "Work Day Scheduler",
            description: "An hourly planner to store tasks and track the hours as they pass.",
            link: "https://guyjiawei.github.io/work-day-scheduler/",
            repo: "https://github.com/GuyJiawei/work-day-scheduler"
        }
        
    ]
    return (
        <div className="row justify-content-center">
            {projects.map((project, idx) => <ProjectItem key={idx} image={project.image} name={project.name} description={project.description}/>)}
        </div>
    )
}

export default ProjectList;