const selectOptions = [
  "Application Web",
  "Application Mobile",
  "Bots",
  "Logiciels",
  "Jeux Videos",
];

function ProjectsFilter({ setSelectProject }) {
  return (
    <select
      onChange={(e) => {
        setSelectProject(e.target.value);
      }}
      className="
                px-4
                sm:px-6
                py-2
                pr-10
                border
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-md
                dark:font-medium
                bg-secondary-light
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
            "
    >
      <option value={setSelectProject} className="text-sm sm:text-md">
        Tous les projets
      </option>

      {selectOptions.map((option) => (
        <option className="text-normal sm:text-md" key={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default ProjectsFilter;
