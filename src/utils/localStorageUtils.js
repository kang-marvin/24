const reactTemplateState = "reactTemplateState";
const reactTemplateTimeout = "reactTemplateTimeout";

export const loadState = () => {
  try {
    const hours = 6;
    const stateTimeout = localStorage.getItem(reactTemplateTimeout);
    const serializedState = localStorage.getItem(reactTemplateState);
    if (stateTimeout == null || reactTemplateState > hours*60*60*1000) {
      saveState(undefined);
      return undefined;
    } else if (serializedState == null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    const now = new Date().getTime();
    localStorage.setItem(reactTemplateState, serializedState);
    localStorage.setItem(reactTemplateTimeout, now);
  } catch (err) {
    // Ignore this for now
  }
};

export const deleteState = () => {
  try {
    window.localStorage.removeItem(reactTemplateState);
    window.localStorage.removeItem(reactTemplateTimeout);
  } catch (err) {
    // Ignore this for now
  }
};
