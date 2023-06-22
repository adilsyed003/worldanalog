setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrot = 30 * htime + mtime / 2;
    mrot = 6 * mtime;
    srot = 6 * stime;
    hour.style.transform = `rotate(${hrot}deg)`;
    minute.style.transform = `rotate(${mrot}deg)`;
    second.style.transform = `rotate(${srot}deg)`;
    time.innerHTML = new Date();

    usa.innerHTML = d.toLocaleString('en-US', {
        timeZone: 'America/Los_Angeles',
    }).split(", ")[1]
    uk.innerHTML = d.toLocaleString('en-US', {
        timeZone: 'Europe/London',
    }).split(", ")[1]
    aus.innerHTML = d.toLocaleString('en-US', {
        timeZone: 'Australia/Sydney',
    }).split(", ")[1]
    germany.innerHTML = d.toLocaleString('en-US', {
        timeZone: 'Europe/Berlin',
    }).split(", ")[1]
    japan.innerHTML = d.toLocaleString('en-US', {
        timeZone: 'Asia/Tokyo',
    }).split(", ")[1]
    uae.innerHTML = d.toLocaleString('en-US', {
        timeZone: 'Asia/Dubai',
    }).split(", ")[1]
}, 1000);    