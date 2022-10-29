function getMonthString(monthIndex) {
    switch (monthIndex) {
        case 0: return "Jan"
        case 1: return "Feb";
        case 2: return "Mar";
        case 3: return "Apr";
        case 4: return "May";
        case 5: return "Jun";
        case 6: return "Jul";
        case 7: return "Aug";
        case 8: return "Sep";
        case 9: return "Oct";
        case 10: return "Nov";
        case 11: return "Dec";
        default: return "Invalid Month";
    }
}

export function getReleaseDate (release_date)  {
    let releaseDateObject;
    releaseDateObject = new Date(release_date);
    return `${getMonthString(releaseDateObject.getMonth())} ${releaseDateObject.getDate()} ${releaseDateObject.getFullYear()}`;
  }

  export function getRealeaseYear (release_date) {
      let releaseDateObject;
      releaseDateObject = new Date(release_date);
      return releaseDateObject.getFullYear();
  }

  export function getRuntime(runtime) {
      if (runtime < 60) return `${runtime}m`;
      if (runtime === 60) return `1hr`;
    return `${Math.floor(runtime/60)}h ${Math.ceil(runtime%60)}m`;
  }