import React from 'react'

import './styles/Main.css'

export default function Main() {
    return (
        <main>
            <h2 className="Title">Resources</h2>
            <p className="PTitle">Here are a few resources that you mind find helpful. Have a look around. </p>

            <div className="PostWrapper">
                <div className="Post">
                   <h3 className="P1">Resource Guide</h3>
                    <p className="PP1">The Online Resource Guide (ORS)  provides you with an easy-to-use directory of speech language pathology services, providers, and resources that are available locally.</p>
                </div>
                <div className="Post">
                <h3 className="P2">Navigation Tool</h3>
                    <p className="PP2">We created an inclusive navigation tool that allows you to see how the entire request-to-service cycle works in your system and zoom in on exactly how it breaks down into several different steps.</p>
                </div>

                <div className="Post">
                    <h3 className="P3">Online Portal</h3>
                    <p className="PP3">Join our online community here. Save resources, information, and other things. </p>
                </div>

            </div>
            <section className="Who">
            <div Classname="WhoSpace">
                <h2 Classname="Whoh">Who We Are</h2>
                <p className="Whop">Inclusive is a human service and social enterprise in NYC that protects individuals with IDD’s (Intellectual and/or Developmental Disabilities). Our specialty is providing services to parents with individuals whose language development has been impeded by: severe physical impairments, life-changing medical conditions, traumatic brain injuries and many other factors.</p>

            </div>

            </section>
            <section className="What">
                <div ClassName="WhatSpace">
                    <h2 className="Whath">What We Do</h2>
                    <p className="Whatp"> Outreach, workshops and trainings, and real-time telephone support are other methods that Inclusive uses to offer support and assistance to those with I/DDs in a group setting. </p>
                    <a href="#">Learn More</a>
                </div>
            </section>

            <section className="News"> 
            <div>
                <h2 className="News">Get Our Newsletter!</h2>
                <p className="Newp">Become a part of our community. </p>

                <form className="Email">
                <input className="InputField type=text name=Email"></input>
                </form>
                <button>Get Newsletter</button>
            </div>
            </section>
        </main>
    )
}





