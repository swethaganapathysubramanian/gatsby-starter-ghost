import React from "react";
import { graphql } from "gatsby";
import "../components/about.css";
import Img from "gatsby-image";

const about = ({ data }) => {
    console.log(data);
    return (
        <div>
            <section className="header">
                <p>{data.header.nodes[0].title}</p>
            </section>
            <section className="studio">
                <h2> Studio Culture</h2>
                <div className="content">
                    <article
                        dangerouslySetInnerHTML={{
                            __html: data.home.nodes[0].html,
                        }}
                    ></article>
                    <article
                        dangerouslySetInnerHTML={{
                            __html: data.home.nodes[1].html,
                        }}
                    />
                </div>
            </section>
            <section className="team">
                <h2>Our Team</h2>
                <div className="members">
                    {data.team.nodes.reverse().map((member) => (
                        <div>
                            <img
                                src={member.feature_image}
                                alt="profile"
                                className="avatar"
                            />
                            <h3 style={{ marginBottom: 0 }}>
                                <strong>{member.title.split(";")[0]}</strong>
                            </h3>
                            <h5 style={{ marginTop: 0 }}>
                                {member.title.split(";")[1]}
                            </h5>
                        </div>
                    ))}
                </div>
            </section>
            <section>
                {" "}
                <br />
                <br />
                <br /> <br />
                <br />
            </section>
            <div className="review">
                {data.review.nodes.map((review) => (
                    <section className="card">
                        <article>
                            <h2>{review.title.split(";")[0]}</h2>
                            <h5>{review.title.split(";")[1]}</h5>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: review.html,
                                }}
                            ></p>
                        </article>
                        <article>
                            <img src={review.feature_image} />
                        </article>
                        <br />
                    </section>
                ))}
            </div>
            <div>
                <section>
                    {" "}
                    <br />
                    <br />
                    <br /> <br />
                    <br />{" "}
                </section>
            </div>
        </div>
    );
};

export const query = graphql`
    {
        home: allGhostPage(
            filter: { tags: { elemMatch: { slug: { eq: "home" } } } }
        ) {
            nodes {
                title
                slug
                tags {
                    slug
                }
                html
            }
        }
        team: allGhostPage(
            filter: { tags: { elemMatch: { slug: { eq: "team" } } } }
        ) {
            nodes {
                title
                slug
                tags {
                    slug
                }
                html
                feature_image
            }
        }
        header: allGhostPage(
            filter: { tags: { elemMatch: { slug: { eq: "header" } } } }
        ) {
            nodes {
                title
                slug
                tags {
                    slug
                }
                html
            }
        }
        review: allGhostPage(
            filter: { tags: { elemMatch: { slug: { eq: "review" } } } }
        ) {
            nodes {
                title
                slug
                tags {
                    slug
                }
                html
                feature_image
            }
        }
    }
`;
export default about;
