const AboutMe = () => {
  return (
    <section id="about" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="heading mb-8">
          About{" "}
          <span className="text-purple">Me</span>
        </h1>
       
        <div className="space-y-6 text-base md:text-lg">
          <p className="leading-relaxed">
            From a young age, I was fascinated by how things worked—whether it was taking apart gadgets 
            to see their inner mechanisms or writing my first lines of code to make something move on a screen. 
            That curiosity led me to pursue a dual path in Software Engineering at Morehouse College and 
            Computer Engineering at Georgia Institute of Technology, where I've learned to blend creativity 
            with technical precision.
          </p>
          <p className="leading-relaxed">
            But for me, engineering isn't just about writing clean code—it's about solving real problems 
            for real people. I fell in love with front-end development because it's where technology meets 
            human experience. Every pixel, interaction, and animation tells a story, and I want to make 
            sure that story is intuitive, engaging, and accessible.
          </p>
          <p className="leading-relaxed">
            Beyond the screen, I thrive on collaboration. Whether I'm mentoring fellow students, leading 
            a team project, or brainstorming the best way to scale a user-friendly design, I believe the 
            best solutions come from diverse perspectives. I'm driven by a simple question: How can we 
            make technology work better for everyone?
          </p>
          <p className="leading-relaxed">
            Now, I'm looking to bring that mindset to teams who care about impact, innovation, and 
            user-centric design. If you're building something that challenges the status quo, I'd love 
            to connect—and maybe help bring it to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe; 