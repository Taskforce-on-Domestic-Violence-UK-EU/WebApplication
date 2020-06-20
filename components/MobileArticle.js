import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import KeyPoint from "./Key";

import { useRef, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100vw",
  },

  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },

  overview: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },

  title: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Playfair Display, serif",
    fontSize: 32,
    textAlign: "left",
    width: "80%",
    marginBottom: "5vh",
    marginTop: "15vh",
  },

  subheader: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Frank Ruhl Libre, serif",
    fontWeight: 700,
    fontSize: 20,
    width: "100%",
    height: "100%",
    lineHeight: "32px",
  },

  imageContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    marginBottom: "4vh",
  },
  image: {
    width: "100%",
  },
  article: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    minHeight: "100%",
    marginTop: "10",
    paddingBottom: "10rem",
  },
  innerWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    margin: 0,
    marginTop: "10px",
  },
  text: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Frank Ruhl Libre, serif",
    fontWeight: 300,
    fontSize: 22,
    width: "100%",
    height: "100%",
    lineHeight: "32px",
  },
  author: {
    color: "black",
    fontFamily: "Frank Ruhl Libre, serif",
    fontWeight: 500,
    fontSize: "14px",
    width: "80%",
    margin: 0,
  },
  date: {
    color: "black",
    fontFamily: "Frank Ruhl Libre, serif",
    fontWeight: 500,
    fontSize: "14px",
    width: "80%",
    marginTop: 10,
  },
  articleImage: {
    width: "100%",
    height: 400,
    objectFit: "cover",
    marginTop: 30,
    marginBottom: 30,
  },
}));

function Article() {
  const overviewRef = useRef(null);
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.overview}>
        {/* <div className={classes.imageContainer}>
          <img
            className={classes.image}
            src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
          />
        </div> */}
        <h1 ref={overviewRef} className={classes.title}>
          Why Are Domestic Abuse Perpetrators Getting Away With Their Crimes?
        </h1>
      </div>
      <div className={classes.article}>
        <div className={classes.innerWrapper}>
          <h2 className={classes.author}>Safia Bolton</h2>
          <h2 className={classes.date}>May 20, 2020</h2>
        </div>
        <div className={classes.body}>
          <p className={classes.text}>
            Police are the ‘gatekeepers of the criminal justice system’ - their
            thorough, sensitive understanding of all forms of domestic abuse is
            essential for providing victims with the protection they deserve.
            However, only around a fifth people experiencing domestic abuse
            report it to the police, meaning that the justice process is not
            even starting. I want to investigate why such the majority of
            domestic abuse crimes go unreported, and how widespread
            misconceptions about abuse may impact victims’ decisions to stay
            silent.
          </p>

          <h3 className={classes.subheader}>What is domestic abuse?</h3>
          <p className={classes.text}>
            Domestic abuse is a serious criminal issue which is predicted to
            affect approximately one in five people in the UK at some point in
            their lives. Though it is a criminal offence, the term ‘domestic
            abuse’ is tightly wrapped in a layer of misconceptions and myths,
            including the widespread belief that domestic abuse only means
            physically violent behaviour, when, in reality, ‘non-physical forms
            of abuse can be as destructive as physical violence.’
          </p>
          <p className={classes.text}>
            As you can see, the Crown Prosecution Service definition includes
            non-physical forms, defining domestic abuse as:
          </p>
          <KeyPoint
            size={25}
            text={
              '"Any incident of controlling, coercive or threatening behaviour, violence or abuse between those aged 16 or over who are or have been intimate partners or family members, regardless of their gender or sexuality."'
            }
          />
          <p className={classes.text}>
            Currently, there’s no statutory definition of domestic abuse,
            meaning existing criminal offences are applied to each individual
            abuse case. This is due to change this year with the introduction of
            the 2020 Domestic Abuse Bill, which will make domestic abuse an
            offence itself, and supply a thorough explanation of what
            constitutes abusive behaviour.
          </p>
          <p className={classes.text}>
            The statutory definition intends to create a better understanding
            about domestic abuse for the general public and essential services,
            including the police force. Protecting victims means combatting
            deeply rooted stereotypes and recognising how serious abuse can be,
            even when it is not physical.
          </p>
          <h3 className={classes.subheader}>
            Why don’t people experiencing domestic abuse report it to the
            police?
          </h3>
          <p className={classes.text}>
            Domestic abuse is a crime behind closed doors, and some victims may
            never reach out for help from charities or family and friends, let
            alone report it to the police. Investigations by SafeLives show that
            high-risk victims live with domestic abuse for an average of 2.3
            years before getting help.
          </p>
          <p className={classes.text}>
            It’s not uncommon to think, why not just leave an abusive
            relationship? Domestic abuse is an incredibly complex issue and
            leaving is not straightforward. Some potential reasons why victims
            may not leave an abusive relationship include: fears for safety;
            embarrassment: feeling isolated, financial dependence, and
            immigration concerns.
          </p>
          <p className={classes.text}>
            If we assume it’s easy to leave, we assume a victim of abuse is
            there on their own free will. Victims aren’t choosing to be victims,
            and making such insensitive assumptions is called victim-blaming.
            It’s perpetrators of abuse who are to blame.
          </p>
          <KeyPoint
            size={25}
            text={"At least 149 women were killed by men in the UK in 2018"}
          />
          <p className={classes.text}>
            These surveys reveal that lack of trust in the police is a key
            concern for survivors of domestic abuse - it is ranked as the third
            highest reason on both tables for not reporting to the police. The
            2014 HMIC survey further revealed that the police response was ‘not
            good enough and must be improved’ - surveyed victims said ‘that they
            were frequently not taken seriously, that they felt judged and that
            some officers demonstrated a considerable lack of empathy and
            understanding.’
          </p>

          <p className={classes.text}>
            An updated 2019 HMIC investigation suggests that since 2014,
            victims’ confidence that police will take domestic abuse seriously
            may have grown in the past five years, and police training in
            understanding domestic abuse is being prioritised. Nonetheless, I
            would argue that victims still fear that police will be unable to
            sensitively respond to domestic abuse. We see this reflected in the
            above CSEW 2018 survey table: out of thirteen reasons for not
            reporting to the police, eight involved some element of direct
            concern about the police or going to court. There are two problems
            here: firstly, victims do not trust the police and therefore do not
            report abuse, and, secondly, victims who do choose to report to the
            police are in some cases being treated poorly. Both problems result
            in perpetrators getting away with abuse.
          </p>
          <KeyPoint
            size={25}
            text={
              "An estimated 5.7% of adults (2.4 million) experienced domestic abuse year ending March 2019."
            }
          />

          <p className={classes.text}>
            Evidence from The Bureau of Investigative Journalism also highlights
            the disturbing police corruption concerning victims who are abused
            by people who work within the police force, which requires urgent
            attention, and will continue to forcefully prevent victims from
            reporting until it is properly addressed.
          </p>
          <h3 className={classes.subheader}>Are things changing?</h3>
          <p className={classes.text}>
            As Sian Hawkins of Women’s Aid says, ‘it takes a lot of strength for
            a survivor to build up the courage to report domestic abuse to the
            police.’ It’s unacceptable that one of the reasons victims do not
            want to report abuse is that they feel they cannot trust the very
            system which should provide them with protection.
          </p>
          <p className={classes.text}>
            Independent Domestic Violence Advisors (IDVAs), who provide
            sensitive support to victims throughout the judiciary process, aim
            to help solve the issues around fears of reporting to the police.
            Support from IDVAs mean victims are not dealing with the police
            alone. The HMIC 2019 report states that use of IDVAs by the police
            service is increasing, and their work is associated with achieving
            successful results in domestic abuse cases. However, there is still
            a long way to go: only 4 out of the 43 police services in England
            and Wales say they have enough advisors to support victims. With
            around four out of five survivors choosing not to report their
            abuse, police reform and further investment in IDVAS is clearly
            needed to create the sensitive and accessible service domestic abuse
            survivors deserve.
          </p>
          <KeyPoint
            size={25}
            text={
              "41% (37 of 91) of women killed by a partner/ex had separated or taken steps to separate with 30% of them (11/37) killed within the first month and 70% (24/37) killed within the first year."
            }
          />
          <p className={classes.text}>
            The continued existence of dangerous stereotypes about abuse will
            continue to discourage victims from speaking out about abuse. False
            portrayals of domestic abuse as a crime of passion, and trivialising
            abuse by implying victims are blame-worthy liars, with salacious
            headlines such as ‘I slapped JK and I’m not sorry’ shows the media
            perpetuates the shaming and blaming which frightens survivors into
            silence. A recent CPS investigation into false allegations revealed
            that in a 17-month period, there were 111,891 prosecutions for
            domestic violence, and only SIX for making false allegations. This
            should ‘help to dispel the appalling misconception that victims of
            abuse are lying about abuse.’ They are not lying. But their fear
            that the public, that the police service, that friends and family,
            might think they are lying, could mean they stay silent, and that
            serious crimes go unreported.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Article;
