import styles from "./KidsBlogPage.module.scss";

const KidsBlogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.flexColumn}>
        <div className={styles.centered}>
          <img
            alt="kids blog"
            src="https://kidemy.com/_next/image?url=%2Fimages%2Fblog1.webp&w=1920&q=75"
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>
            How Games Help 2-5-Year-Olds Learn and Grow
          </h2>
        </div>
      </div>
      <div className={styles.flexColumn}>
        <p className={styles.paragraph}>
          As parents, we always want the best for our kids, and one of the most
          important things we can give them is the opportunity to play. But did
          you know that play is more than just fun? It's also one of the best
          ways for your little one to learn and develop essential life skills.
        </p>
        <div className={styles.textContainer}>
          <ul className={styles.list}>
            <li>
              <strong>Building Creativity</strong>
              <p>
                When children play, especially with games that encourage
                imagination, they start to see the world in different ways.
                Whether they're pretending to be superheroes or playing with
                digital puzzles, these activities spark their creativity,
                helping them think outside the box.
              </p>
            </li>
            <li>
              <strong>Improving Motor Skills</strong>
              <p>
                At ages 2-5, kids are developing important motor skills. Our
                games are designed to encourage tapping, dragging, and drawing,
                which helps them improve hand-eye coordination. This kind of
                interactive play not only boosts their fine motor abilities but
                also prepares them for activities like writing.
              </p>
            </li>
            <li>
              <strong>Learning Problem-Solving</strong>
              <p>
                Even at a young age, kids can start developing problem-solving
                skills. Games with simple challenges, like matching shapes or
                finding hidden objects, teach children how to think critically
                and find solutions - skills they'll use throughout their lives.
              </p>
            </li>
            <li>
              <strong>Boosting Confidence</strong>
              <p>
                Playing and winning games can give kids a sense of
                accomplishment. Even if they don't succeed at first, learning to
                try again is a valuable lesson. Through play, they learn that
                practice leads to improvement, building their confidence along
                the way.
              </p>
            </li>
            <li>
              <strong>Connecting with Parents</strong>
              <p>
                Gaming can also be a bonding experience for parents and
                children. Spending time playing together not only strengthens
                your relationship but also gives you the chance to watch your
                little one's progress and growth in real-time.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.flexColumn}>
        <div className={styles.centered}>
          <img
            alt="kids blog"
            src="https://kidemy.com/_next/image?url=%2Fimages%2Fblog2.webp&w=1920&q=75"
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>
            Screen Time for Toddlers: Finding the Right Balance
          </h2>
        </div>
      </div>
      <div className={styles.flexColumn}>
        <p className={styles.paragraph}>
          In today's digital world, children are exposed to screens at an
          increasingly early age. From smartphones and tablets to televisions
          and computers, screens are everywhere. While parents often worry about
          the effects of screen time on young children, especially toddlers aged
          2-5, it's important to recognize that not all screen time is bad. When
          used mindfully, screens can be powerful tools for learning and
          development. The key is finding the right balance between beneficial
          screen time and active, creative play.
        </p>
        <p className={styles.paragraphBold}>
          Understanding the Impact of Screen Time on Toddlers
        </p>
        <p className={styles.paragraph}>
          At the heart of the screen time debate is concern over how much
          exposure to screens is appropriate for young children. The American
          Academy of Pediatrics (AAP) recommends that children between the ages
          of 2 and 5 should have no more than one hour of high-quality screen
          time per day. But what exactly constitutes "high-quality" screen time?
        </p>
        <p className={styles.paragraph}>
          Not all screen time is created equal. Passive consumption, such as
          watching TV shows or videos, doesn't offer the same benefits as
          interactive and educational content. Interactive screen time, which
          involves children actively engaging with the content—whether by
          solving puzzles, learning numbers, or exploring creative games—can
          stimulate cognitive development. This type of screen time can help
          children build problem-solving skills, improve hand-eye coordination,
          and develop early literacy and numeracy.
        </p>
        <p className={styles.paragraph}>
          However, excessive passive screen time, particularly when it's
          unregulated, can lead to negative outcomes. Studies suggest that too
          much screen time in early childhood can contribute to sleep problems,
          attention issues, and delays in language development. It's important
          to consider both the amount and the type of screen exposure when
          evaluating its impact on toddlers.
        </p>
        <p className={styles.paragraphBold}>
          The Benefits of Educational Games and Apps
        </p>
        <p className={styles.paragraph}>
          When it comes to screen time for toddlers, one of the best uses of
          digital devices is through interactive educational games and apps.
          High-quality games designed for children aged 2-5 often combine fun
          with learning, allowing toddlers to explore new concepts and develop
          essential skills in an engaging way.
        </p>
      </div>
    </div>
  );
};

export default KidsBlogPage;
