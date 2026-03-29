const About = () => {
  return (
    <section id="about" className="bg-card/50">
      <div className="section-container">
        <h2 className="section-title">Sobre mim</h2>
        
        <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground animate-fade-in">
          <p className="leading-relaxed">
            Tenho <span className="text-primary font-semibold">22 anos</span>, sou 
            <span className="text-foreground font-semibold"> Desenvolvedor Full Stack</span> e estudante de
            <span className="text-foreground font-semibold"> Ciências da Computação</span>, com experiência na criação, manutenção e evolução de aplicações web escaláveis.
          </p>
          
          <p className="leading-relaxed">
            Possuo sólidos conhecimentos em JavaScript, React, PHP, Python, Bootstrap, Git, SQL, além de experiência com automações utilizando n8n e construção de dashboards analíticos no Power BI.
          </p>
          
          <p className="leading-relaxed">
            Atuo no desenvolvimento end-to-end de sistemas, desde a definição de requisitos até a implementação e otimização de performance, sempre com foco na experiência do usuário e na eficiência das soluções.
          </p>
          
          <p className="leading-relaxed">
            Paralelamente, venho aprofundando minhas habilidades em <span className="text-foreground font-semibold">Análise de Dados</span>, com foco em modelagem, tratamento, visualização e interpretação de dados para suporte à tomada de decisões estratégicas.
          </p>
          
          <p className="leading-relaxed text-primary font-medium">
            Busco integrar desenvolvimento de software e análise de dados para criar soluções inteligentes, automatizadas e orientadas a resultados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
