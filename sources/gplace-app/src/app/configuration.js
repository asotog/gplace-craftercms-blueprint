const configurationElement = document.querySelector('script#configuration');

const configurationString = configurationElement ? configurationElement.innerText : null;

export default {
  ...(configurationString ? JSON.parse(configurationString) : {}),
};
