

javascript:(async function () {
    async function extracted(sleep,) {
        var flag = true;
        var IDs;
        while (flag) {
            flag = false;
            await sleep(1000);
            ;
            try {
                IDs = [document.getElementsByClassName("is-opened")[0].attributes['data-message-id'].nodeValue];
            } catch (error) {
                IDs = ['pending'];
            }


            if (IDs[0] == 'pending') {
                await new Promise(r => setTimeout(r, 1000));
                flag = true;

            }
        }
        return { IDs};
    }
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    //have to write a function to get labels IDs and map them to names

    while (true) {
        await sleep(1000);
        ;var uid = JSON.parse(localStorage["ps-0"]).UID;
        divs = document.getElementsByClassName("item-container");
        for (i = 0; i < divs.length; i++) {
            elelment = divs[i];
            console.log(elelment.getElementsByClassName("item-senders")[0].getElementsByTagName("span")[0].title);
            if (elelment.getElementsByClassName("item-senders")[0].getElementsByTagName("span")[0].title != "") {
                /* inside this if statement you can add your own logic to filter the emails maybe in future I will add a sieve parser*/
                if (elelment.getElementsByClassName("item-senders")[0].getElementsByTagName("span")[0].title.includes("steam"))/*condition for filter in this case is if the mail contains steam*/ {
                    elelment.click();
                    var IDs = await extracted(sleep, IDs);
                    console.log(JSON.stringify({
                        "LabelID": "8K4zniYGIDE1r42ubu7mb6ete6EUsyVYw4oesErUJYzaK9Rsg7wHMcwMgoce4ojuyHFQBncwPoR56xF2Wqurqg==",
                        "IDs": IDs
                    }),);
                    console.log(IDs);
                    fetch("https://mail.protonmail.com/api/mail/v4/messages/label", {
                        "credentials": "include",
                        "headers": {
                            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; rv:91.0) Gecko/20100101 Firefox/91.0",
                            "Accept": "application/vnd.protonmail.v1+json",
                            "Accept-Language": "en-US",
                            "x-pm-appversion": "web-mail@4.20.9",
                            "x-pm-uid": uid,
                            "Content-Type": "application/json",
                            "Sec-GPC": "1",
                            "Sec-Fetch-Dest": "empty",
                            "Sec-Fetch-Mode": "cors",
                            "Sec-Fetch-Site": "same-origin"
                        },
                        "referrer": "https://mail.protonmail.com/u/0/inbox",
                        "body": JSON.stringify({
                            "LabelID": "fT4Yj8ggr2u-teOeWxZO8iGpmPDGStPSyFk76jQNjxcR6jT9zI8ygj5Pyb9OavFO8WR_vDXwLJVc06amOkTg6A==", //label id you can get it by inspecting the label buttons on protonmail
                            "IDs": IDs
                        }),
                        "method": "PUT",
                        "mode": "cors"
                    });
                }
                if (elelment.getElementsByClassName("item-senders")[0].getElementsByTagName("span")[0].title.includes("itch.io")) {
                    console.log("itch folder");
                    elelment.click();
                    await sleep(1000);
                    var IDs = await extracted(sleep, IDs);
                    console.log(JSON.stringify({
                        "LabelID": "8K4zniYGIDE1r42ubu7mb6ete6EUsyVYw4oesErUJYzaK9Rsg7wHMcwMgoce4ojuyHFQBncwPoR56xF2Wqurqg==",
                        "IDs": IDs
                    }),);
                    fetch("https://mail.protonmail.com/api/mail/v4/messages/label", {
                        "credentials": "include",
                        "headers": {
                            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; rv:91.0) Gecko/20100101 Firefox/91.0",
                            "Accept": "application/vnd.protonmail.v1+json",
                            "Accept-Language": "en-US",
                            "x-pm-appversion": "web-mail@4.20.9",
                            "x-pm-uid": uid,
                            "Content-Type": "application/json",
                            "Sec-GPC": "1",
                            "Sec-Fetch-Dest": "empty",
                            "Sec-Fetch-Mode": "cors",
                            "Sec-Fetch-Site": "same-origin"
                        },
                        "referrer": "https://mail.protonmail.com/u/0/inbox",
                        "body": JSON.stringify({
                            "LabelID": "X9cxYYmenAA-CEC7JK5RzIzCwPGDuRnuWkWyv5kbg2SyqHCcVjA_csHDzwAd9f49xjpYtLwr9kumj4doAiW4BQ==",
                            "IDs": IDs
                        }),
                        "method": "PUT",
                        "mode": "cors"
                    });
                }
                if (elelment.getElementsByClassName("item-senders")[0].getElementsByTagName("span")[0].title.includes("epic")) {
                    elelment.click();
                    await sleep(1000);
                     var IDs = await extracted(sleep, IDs);
                    console.log(JSON.stringify({
                        "LabelID": "8K4zniYGIDE1r42ubu7mb6ete6EUsyVYw4oesErUJYzaK9Rsg7wHMcwMgoce4ojuyHFQBncwPoR56xF2Wqurqg==",
                        "IDs": IDs
                    }),);
                    fetch("https://mail.protonmail.com/api/mail/v4/messages/label", {
                        "credentials": "include",
                        "headers": {
                            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; rv:91.0) Gecko/20100101 Firefox/91.0",
                            "Accept": "application/vnd.protonmail.v1+json",
                            "Accept-Language": "en-US",
                            "x-pm-appversion": "web-mail@4.20.9",
                            "x-pm-uid": uid,
                            "Content-Type": "application/json",
                            "Sec-GPC": "1",
                            "Sec-Fetch-Dest": "empty",
                            "Sec-Fetch-Mode": "cors",
                            "Sec-Fetch-Site": "same-origin"
                        },
                        "referrer": "https://mail.protonmail.com/u/0/inbox",
                        "body": JSON.stringify({
                            "LabelID": "8K4zniYGIDE1r42ubu7mb6ete6EUsyVYw4oesErUJYzaK9Rsg7wHMcwMgoce4ojuyHFQBncwPoR56xF2Wqurqg==",
                            "IDs": IDs
                        }),
                        "method": "PUT",
                        "mode": "cors"
                    });
                }
            }
        }
        document.querySelector("button.button:nth-child(9)").click();
    }
})();