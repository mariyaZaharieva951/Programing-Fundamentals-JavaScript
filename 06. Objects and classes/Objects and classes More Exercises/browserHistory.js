function browserHistory(object, array) {


    for (let line of array) {
        let [command, site] = line.split(' ');
        if (command === 'Close') {
            if (object["Open Tabs"].includes(site)) {
                let sitesOpen = object["Open Tabs"];
                let index = sitesOpen.indexOf(site);
                sitesOpen.splice(index, 1);
                let sitesClosed = object["Recently Closed"];
                sitesClosed.push(site);

                let browserLogs = object["Browser Logs"];
                browserLogs.push(line);

            }
        } else if (command === 'Open') {
            let sitesOpen = object["Open Tabs"];
            sitesOpen.push(site);
            let browserLogs = object["Browser Logs"];
            browserLogs.push(line);
        } else if (command === 'Clear') {
            object["Open Tabs"] = [];
            object["Recently Closed"] = [];
            object["Browser Logs"] = [];

        }
    }
    let entries = Object.entries(object);
    console.log(entries.shift()[1])
    for (let line of entries) {
        let sites = line[1].join(', ');
        console.log(`${line[0]}: ${sites}`)
    }

}

browserHistory({
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]

)