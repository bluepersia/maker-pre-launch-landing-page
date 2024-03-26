document.querySelector ('.form').addEventListener ('submit', handleSubmit);
const textfieldWrapper = document.querySelector ('.form_textfield-wrapper');

function handleSubmit (e)
{
    e.preventDefault ();

    textfieldWrapper.classList.remove ('invalid');

    let err;
    const value = textfieldWrapper.querySelector ('.textfield').value;

    if (!value || value.length == 0)
        err = 'Is required';
    else
    if (!isEmail (value))
        err = 'Must be a valid email'
    
    if (err)
    {
        textfieldWrapper.classList.add ('invalid');
        textfieldWrapper.querySelector ('.textfield_error').textContent = err;
    }
}




function isEmail (val)
{
    return val.match (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
}