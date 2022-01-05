const formInputTemplate: string = `
<label for='{{name}}'>{{label}}</label>
<input id='{{name}}' name='{{name}}' type='{{type}}' value='{{value}}' placeholder='{{placeholder}}' size={{size}}>
<div class="main__validation-error__message" id='{{name}}ErrorMessage'>{{error}}</div>
`;

export default formInputTemplate;
