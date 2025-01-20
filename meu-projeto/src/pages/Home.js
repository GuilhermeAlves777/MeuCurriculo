import React from "react";

const Home = () => {
  return (
    <section id="home" style={styles.section}>
      <img src="https://media.licdn.com/dms/image/v2/C4D03AQFMf_McdGGdgg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1649370814968?e=1743033600&v=beta&t=8tCOxR-fNsoJn_JVCAmIYe7uWR2pEwh1ff-edGdOHPA" alt="Eu" style={{width: '300px', borderRadius: '10px'}}/>
      <h1>Guilherme Alves</h1>
      <p>Desenvolvedor de Software | Focado em Inovação</p>
    </section>
  );
};

const styles = {
  section: { textAlign: "center", padding: "5rem 1rem", backgroundColor: "#f4f4f9" },
};

export default Home;
