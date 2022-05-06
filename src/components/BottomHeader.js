const BottomHeader = ({darkMode}) => {
  return (
    <div className={`${darkMode && "dark-mode"} bottom-header`}>
      
      <p>
        <a href="https://github.com/Raccoonee">GitHub</a>
      </p>
      <h2>Created by Raccoonee</h2>
      <p>
        <a href="https://www.youtube.com">
          Youtube
        </a>
      </p>
    </div>
  );
};

export default BottomHeader;
