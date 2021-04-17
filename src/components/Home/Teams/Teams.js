import React from 'react';
import Team from '../Team/Team';
const Teams = () => {
    return (
        <section className="doctors">
            <div className="container">
                <h2 className="text-center  text-success mb-5">Our Team</h2>
                <div className="row">
                    <Team/>
                    <Team/>
                    <Team/>
                </div>
            </div>
        </section>
    );
};

export default Teams;