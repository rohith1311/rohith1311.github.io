const Projects = () => {
  const projects = [
    {
      title: 'Real-Time Analytics Pipeline',
      description: 'Built a scalable pipeline to process 1M events/sec using Kafka and Spark.',
    },
    {
      title: 'ETL Framework',
      description: 'Developed a reusable ETL framework for ingesting data into AWS Redshift.',
    },
    {
      title: 'Interactive Dashboard',
      description: 'Created an interactive BI dashboard using Tableau and Snowflake.',
    },
  ];

  return (
    <section id="projects" className="py-20 px-8 bg-gray-700">
      <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;