
/**
 * Purpose of this class is
 *  1. Convert JSON object to a stringfied url params.
 */

class urlUtils {
  static toQueryString(urlObject) {
    const queryString = Object
      .keys(urlObject)
      .map(key => key + '=' + urlObject[key])
      .join('&');
    return queryString;
  }
}

export default urlUtils;
