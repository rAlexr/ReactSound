const InputField = ({ label, ...otherProps }) => {
  return (
    <div className="inputfield">
        {label && ( <label className={`${ otherProps.value.lenght ? 'shrink' : '' } inputfield-label` }> {label} </label>)}
      <input className="inputfield-input" {...otherProps} />
    </div>
  );
};

export default InputField;
