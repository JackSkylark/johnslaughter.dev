import style from "./style.module.scss";

import { ExternalLink, VerticalTabs } from "./components";

export const Hero = () => {
    return (
        <div className={style.hero}>
            <section className={style.content}>
                <Articles/>
                {/* <article className={style.article}>
                    <input type="radio" name="hero-article" id="hero-article-1" checked={true}></input> 
                    <label htmlFor="hero-article-1"></label>
                    <div>
                        <h2> Software Engineering </h2>
                        
                        <p>
                            With more than a decade of experience in designing and developing software, I've worked as a key contributor in a variety of high-impact projects. Keep looking to find out more.
                        </p>
                    </div>
                </article>

                <article className={style.article}>
                    <input type="radio" name="hero-article" id="hero-article-2"></input> 
                    <label htmlFor="hero-article-2"></label>
                    <div>
                        <h2> Software Engineering 2</h2>
                        
                        <p>
                            With more than a decade of experience in designing and developing software, I've worked as a key contributor in a variety of high-impact projects. Keep looking to find out more.
                        </p>
                    </div>
                </article> */}
            </section>
            <div className={style.hero_img_wrapper}>
                <ProfileImage/>
                <ExternalLinks/> 
            </div>  
        </div>
    );
}

const Articles = () => {
    return (
        <VerticalTabs 
            tabName="hero-article"
            items={[
                {
                    title: "Architect",
                    content: "Mentoring teams and enabling a growth mindset"
                },
                {
                    title: "Engineer",
                    content: "With more than a decade of experience in designing and developing software, I've worked as a key contributor in a variety of high-impact projects. Keep looking to find out more."
                },
                {
                    title: "Leader",
                    content: "Mentoring teams and enabling a growth mindset"
                }                
            ]}/>
    );
}

const ProfileImage = () => {
    return (
        <div className={style.hero_img}/>
    );
}

const ExternalLinks = () => {
    return (
        <aside className={style.aside}>
            <ExternalLink title="John Slaughter @ GitHub" href="https://github.com/JackSkylark">
                GitHub
            </ExternalLink>
            <ExternalLink title="John Slaughter @ GitLab" href="https://gitlab.com/JackSkylark">
                GitLab
            </ExternalLink>
            <ExternalLink title="John Slaughter @ Moonlark Studios" href="https://www.moonlarkstudios.com/about">
                Moonlark Studios
            </ExternalLink>
        </aside>
    );
}
