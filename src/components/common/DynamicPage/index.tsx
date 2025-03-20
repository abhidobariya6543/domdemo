import React from "react";
import { PageContent, Section } from "./types";
import "./DynamicPage.scss"

interface DynamicPageProps {
  content: PageContent;
}

const DynamicPage: React.FC<DynamicPageProps> = ({ content }) => {
    return (
        <div className="content-container">
            {content?.lastUpdated && (
                <>
                    <p className="update" key={content.lastUpdated}>{content.lastUpdated}</p>
                    <div className="spacer-48" />
                </>
            )}
            {content?.title && (
                <p className="subtitle-md futura-bold" key={content.title}>{content.title}</p>
            )}
            {content?.sections?.map((section: Section, index: number) => {
                switch (section.type) {
                    case "heading":
                        return (
                            <>
                                <div className="spacer-48" />
                                <p className="key-title futura-bold" key={section.content}>{section.content}</p>
                            </>
                        );
                    case "paragraph":
                        return (
                            <>
                                {
                                    section.paragraphs?.map((p: string) => (
                                        <p key={p}>{p}</p>
                                    ))
                                }
                            </>
                        );
                    case "list":
                        return (
                            <ul key={index}>
                                {section?.items?.map((item: string) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        );
                    case "spacer":
                        return (
                            <div className={section.spacer}></div>
                        )
                    default:
                        return null;
                    }
            })}
        </div>
    );
};

export default DynamicPage;
