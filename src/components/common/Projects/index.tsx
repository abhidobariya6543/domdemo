import { projectData } from "./types";
import { OTHER_IMAGES, PROJECTS, TEXT_TO_DISPLAY } from "@/utils/common/Constants";
import { useState } from "react";
import Image from "../Image";
import Fade from "react-bootstrap/Fade";
import "./Projects.scss";
import Button from "../ButtonPrimary";

const Projects = ({

}) => {
    const [activeProject, setActiveProject] = useState(0);
    const [showDetails, setShowDetails] = useState(false);

    const handlePagination = (movement?: string) => {
        if (movement === "left" && activeProject !== 0) {
            setActiveProject(activeProject - 1);
        } else if (movement === "right" && activeProject < PROJECTS.length - 1) {
            setActiveProject(activeProject + 1);
        }
    }

    return (
        <section className="projects-main-container">
            <div className="container">
                <div className="title-container">
                    <h2 className="heading-h2 futura-bold">{TEXT_TO_DISPLAY.ourProjects}</h2>
                </div>
            </div>
            <div className="project-slider-section">
                {
                    PROJECTS.map((project: projectData, index: number) => (
                        <Fade in={index === activeProject} key={index}>
                            <div className={`project-section ${index === activeProject ? "d-flex" : "d-none"}`} key={`project-section-${index}`}>
                                <div className="project-slider">
                                    <Image
                                        data={project?.image}
                                    />
                                </div>
                                <div className={`project-details ${showDetails ? "show-details" : ""}`}>
                                    <div className="top-container">
                                        <div className="dtrm-labels">
                                            {
                                                project.labels.map((label: string) => (
                                                    <div className="lebel-container" key={label}>
                                                        <p className="text-regular">{label}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className="view-project-container">
                                            <p className="text-small" onClick={() => setShowDetails(!showDetails)}>{showDetails ? TEXT_TO_DISPLAY.closeProject : TEXT_TO_DISPLAY.viewProject}</p>
                                        </div>
                                    </div>
                                    <div className="bottom-container">
                                        <h3 className="subtitle-lg futura-bold">{project.title}</h3>
                                    </div>
                                    {showDetails ? <div className="other-details-container">
                                        <div className="spacer-20"></div>
                                        <p className="text-small">
                                            {project.description}
                                        </p>
                                        <div className="spacer-64"></div>
                                        <div className="link-section">
                                            <Button
                                                className="link-button"
                                                text={TEXT_TO_DISPLAY.seeWebsite}
                                            />
                                            <Button
                                                className="link-button"
                                                text={TEXT_TO_DISPLAY.seeApp}
                                            />
                                        </div>
                                    </div> : null}
                                </div>
                                <div className="pagination-container">
                                    <div className="pagination left" onClick={() => handlePagination("left")}>
                                        <Image
                                            data={OTHER_IMAGES.leftArrow}
                                        />
                                    </div>
                                    <div className="pagination right" onClick={() => handlePagination("right")}>
                                        <Image
                                            data={OTHER_IMAGES.rightArrow}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    ))
                }
            </div>
        </section>
    )
}

export default Projects;