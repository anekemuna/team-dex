const About = () => {
  return (
    <div className="about">
      <h2>Stats Info</h2>

      <section>
        <p>
          Each Pokémon has a Type and six stats. Types restrict the possible
          ranges for each stat. This means each type has clear strengths and weaknesses.
        </p>
      </section>

      <section>
        <h3>Types &amp; Roles</h3>
        <ul>
          <li>🔥 Fire — Physical Powerhouse (high Attack, good Speed)</li>
          <li>💧 Water — Balanced Tank (high Defense/HP, lower Speed)</li>
          <li>🌿 Grass — Support / Status (strong special defense)</li>
          <li>⚡ Electric — Speed Demon (very high Speed & Sp. Attack)</li>
          <li>🔮 Psychic — Special Attacker (top Special Attack)</li>
          <li>🌑 Dark — Physical Trickster (high Attack + speed)</li>
        </ul>
      </section>

      <section>
        <h3>Attributes (Stats)</h3>
        <p>The six classic Pokémon stats used in Team Dex:</p>
        <ul>
          <li>Attack — Physical damage</li>
          <li>Defense — Physical resistance</li>
          <li>Special Attack — Special move damage</li>
          <li>Special Defense — Special move resistance</li>
          <li>Speed — Turn order / evasion</li>
          <li>HP — Health points</li>
        </ul>
      </section>

      <section>
        <h3>Type Restrictions</h3>
        <p>
          Each stat ranges between 1 - 10. But depending on the type max might
          be less than 10. Selecting a type controls the max range for each
          stat. Ranges:
        </p>
        <ul>
          <li>
            <strong>Fire</strong> — Attack: 1-10, Defense: 1-8, Sp. Attack: 1-9,
            Sp. Defense: 1-6, Speed: 1-8, HP: 1-7
          </li>
          <li>
            <strong>Water</strong> — Attack: 1-7, Defense: 1-9, Sp. Attack: 1-8,
            Sp. Defense: 1-9, Speed: 1-6, HP: 1-10
          </li>
          <li>
            <strong>Grass</strong> — Attack: 1-6, Defense: 1-8, Sp. Attack: 1-9,
            Sp. Defense: 1-10, Speed: 1-5, HP: 1-8
          </li>
          <li>
            <strong>Electric</strong> — Attack: 1-6, Defense: 1-5, Sp. Attack:
            1-10, Sp. Defense: 1-7, Speed: 1-10, HP: 1-6
          </li>
          <li>
            <strong>Psychic</strong> — Attack: 1-4, Defense: 1-5, Sp. Attack:
            1-10, Sp. Defense: 1-9, Speed: 1-8, HP: 1-7
          </li>
          <li>
            <strong>Dark</strong> — Attack: 1-9, Defense: 1-7, Sp. Attack: 1-6,
            Sp. Defense: 1-8, Speed: 1-9, HP: 1-6
          </li>
        </ul>
      </section>

      <section>
        <h3>Strategy &amp; Success Metrics</h3>
        <ul>
          <li>
            <strong>Natural trade-offs</strong> — e.g. Electric = fast + high
            Sp. Attack but low HP and Defense.
          </li>
          <li>
            <strong>Team building</strong> — mix roles: Fire/Dark for physical
            damage, Water/Grass for tanking, Electric/Psychic for special
            attackers.
          </li>
          <li>
            <strong>Summary metrics</strong> — Type Diversity, Stat
            Distribution, and Speed Control (fast Pokémon paired with slow
            tanks).
          </li>
        </ul>
      </section>

      <p style={{ marginTop: 12, fontStyle: "italic" }}>
        The rules above are used in the Create form to limit stat choices and
        encourage strategic decisions when building teams.
      </p>
    </div>
  );
};

export default About;
