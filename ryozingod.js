/*

Kalo Mau Recode Kasih Credit gw ›
TheZetsubXygen / Ryo

📝 > Created By PATRON 🚹
🖥️ > Base Ori By BLUE DEMON
               
*/
const {
  ryozingodConnect,
  downloadContentFromMessage,
  emitGroupParticipantsUpdate,
  emitGroupUpdate,
  generateWAMessageContent,
  generateWAMessage,
  makeInMemoryStore,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  MediaType,
  areJidsSameUser,
  WAMessageStatus,
  downloadAndSaveMediaMessage,
  AuthenticationState,
  GroupMetadata,
  initInMemoryKeyStore,
  getContentType,
  MiscMessageGenerationOptions,
  useSingleFileAuthState,
  BufferJSON,
  WAMessageProto,
  MessageOptions,
  WAFlag,
  WANode,
  WAMetric,
  ChatModification,
  MessageTypeProto,
  WALocationMessage,
  ReconnectMode,
  WAContextInfo,
  proto,
  WAGroupMetadata,
  ProxyAgent,
  waChatKey,
  MimetypeMap,
  MediaPathMap,
  WAContactMessage,
  WAContactsArrayMessage,
  WAGroupInviteMessage,
  WATextMessage,
  WAMessageContent,
  WAMessage,
  BaileysError,
  WA_MESSAGE_STATUS_TYPE,
  MediaConnInfo,
  URL_REGEX,
  WAUrlInfo,
  WA_DEFAULT_EPHEMERAL,
  WAMediaUpload,
  mentionedJid,
  processTime,
  Browser,
  MessageType,
  Presence,
  WA_MESSAGE_STUB_TYPES,
  Mimetype,
  relayWAMessage,
  Browsers,
  GroupSettingChange,
  DisconnectReason,
  WASocket,
  getStream,
  WAProto,
  isBaileys,
  AnyMessageContent,
  fetchLatestBaileysVersion,
  templateMessage,
  InteractiveMessage,
  Header,
} = require("@whiskeysockets/baileys");
//=================================================//
const {
  default: makeWaSocket,
  useMultiFileAuthState,
} = require("@whiskeysockets/baileys");
//=================================================//
// Disini Ada Beberapa Modul Yg Udh kg gw Pake, lu Hapus Sendiri Aj 🚬🗿
const axios = require("axios");
const os = require("os").cpus().length;
const util = require("util");
const urll = require("url");
const jimp = require("jimp");
const fetch = require("node-fetch");
const speed = require("performance-now");
const moment = require("moment-timezone");
const pino = require("pino");
const { spawn: spawn, exec } = require("child_process");
const { Primbon } = require("scrape-primbon");
const primbon = new Primbon();
const { performance } = require("perf_hooks");
const dgram = require("dgram");
const fg = require("api-dylux");
const path = require("path");
const cheerio = require("cheerio");
const ytdl = require("ytdl-core");
const colors = require("@colors/colors/safe");
const chalk = require("chalk");
const FormData = require("form-data");
const ms = (toMs = require("ms"));
const crypto = require("crypto");
const yts = require("yt-search");
const tls = require("tls");
const net = require("net");
const http2 = require("http2");
const cluster = require("cluster");
const { color } = require("./lib/color");
const { uptotelegra } = require("./lib/upload");
const { remini } = require("./lib/remini");
const { toPTT, toAudio } = require("./lib/converter");
const { UploadFileUgu, webp2mp4File, floNime } = require("./lib/uploader");
const sockett = dgram.createSocket("udp4");
const bochil = require("@bochilteam/scraper");
const fakeUA = require("fake-useragent");
const randomUA = fakeUA().toString();
const fs = require("fs");
//=================================================//
module.exports =
  ryozingod =
  handler =
    async (ryozingod, m, chatUpdate, store) => {
      try {
        var body =
          m.mtype === "conversation"
            ? m.message.conversation
            : m.mtype === "imageMessage"
            ? m.message.imageMessage.caption
            : m.mtype === "videoMessage"
            ? m.message.videoMessage.caption
            : m.mtype === "extendedTextMessage"
            ? m.message.extendedTextMessage.text
            : m.mtype === "buttonsResponseMessage"
            ? m.message.buttonsResponseMessage.selectedButtonId
            : m.mtype === "listResponseMessage"
            ? m.message.listResponseMessage.singleSelectReply.selectedRowId
            : m.mtype === "interactiveResponseMessage"
            ? JSON.parse(
                m.message.interactiveResponseMessage.nativeFlowResponseMessage
                  .paramsJson
              ).id
            : m.mtype === "templateButtonReplyMessage"
            ? m.message.templateButtonReplyMessage.selectedId
            : m.mtype === "messageContextInfo"
            ? m.message.buttonsResponseMessage?.selectedButtonId ||
              m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
              m.message.InteractiveResponseMessage.NativeFlowResponseMessage ||
              m.text
            : "";

        //=================================================//
        require("./config");
        const {
          smsg,
          getGroupAdmins,
          formatp,
          h2k,
          tanggal,
          formatDate,
          getTime,
          isUrl,
          sleep,
          clockString,
          msToDate,
          sort,
          toNumber,
          enumGetKey,
          runtime,
          fetchJson,
          getBuffer,
          jsonformat,
          delay,
          format,
          logic,
          generateProfilePicture,
          parseMention,
          getRandom,
          pickRandom,
          reSize,
        } = require("./lib/myfunction");
        //=================================================//
        const {
          addPremiumUser,
          getPremiumExpired,
          getPremiumPosition,
          expiredCheck,
          checkPremiumUser,
          getAllPremiumUser,
        } = require("./lib/premiun");
        let afk = require("./lib/afk"); //afk

        //=================================================//
        const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"));
        let tebaklagu = (db.data.game.tebaklagu = []);
        let kuismath = (db.data.game.kuismath = []);
        let tebakgambar = (db.data.game.tebakgambar = []);
        let tebakkata = (db.data.game.tebakkata = []);
        let tebakkalimat = (db.data.game.tebakkalimat = []);
        let tebaklirik = (db.data.game.tebaklirik = []);
        let tebaktebakan = (db.data.game.tebaktebakan = []);
        let tebakbendera = (db.data.game.tebakbendera = []);
        let tebakbendera2 = (db.data.game.tebakbendera2 = []);
        let tebakkabupaten = (db.data.game.tebakkabupaten = []);
        let tebakkimia = (db.data.game.tebakkimia = []);
        let tebakasahotak = (db.data.game.tebakasahotak = []);
        let tebaksiapakahaku = (db.data.game.tebaksiapakahaku = []);
        let tebaksusunkata = (db.data.game.tebaksusunkata = []);
        let tebaktekateki = (db.data.game.tebaktekateki = []);
        let _afk = JSON.parse(fs.readFileSync("./dtbs/afk-user.json"));
        let ntvirtex = JSON.parse(
          fs.readFileSync("./dtbs/enable/antivirus.json")
        );
        let nttoxic = JSON.parse(
          fs.readFileSync("./dtbs/enable/antitoxic.json")
        );
        let ntasing = JSON.parse(
          fs.readFileSync("./dtbs/enable/antiasing.json")
        );
        let ntwame = JSON.parse(fs.readFileSync("./dtbs/enable/antiwame.json"));
        let ntilinkall = JSON.parse(
          fs.readFileSync("./dtbs/enable/antilinkall.json")
        );
        let ntilinktwt = JSON.parse(
          fs.readFileSync("./dtbs/enable/antilinktwitter.json")
        );
        let ntilinktt = JSON.parse(
          fs.readFileSync("./dtbs/enable/antilinktiktok.json")
        );
        let ntilinktg = JSON.parse(
          fs.readFileSync("./dtbs/enable/antilinktelegram.json")
        );
        let ntilinkfb = JSON.parse(
          fs.readFileSync("./dtbs/enable/antilinkfacebook.json")
        );
        let ntilinkig = JSON.parse(
          fs.readFileSync("./dtbs/enable/antilinkinstagram.json")
        );
        let ntilinkytch = JSON.parse(
          fs.readFileSync("./dtbs/enable/antilinkytchannel.json")
        );
        let ntilinkytvid = JSON.parse(
          fs.readFileSync("./dtbs/enable/antilinkytvideo.json")
        );
        //=================================================//
        const { groupMembers } = m;
        var budy = typeof m.text == "string" ? m.text : "";
        const prefixRegex = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/;
        const prefix =
          prefa && prefixRegex.test(body)
            ? body.match(prefixRegex)[0]
            : prefa ?? global.prefix;
        const isCmd = body.startsWith(prefix);
        const command = body.startsWith(prefix)
          ? body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase()
          : "";
        const args = body.trim().split(/ +/).slice(1);
        const pushname = m.pushName || "No Name";
        const text = (q = args.join(" "));
        const fatkuns = m.quoted || m;
        const quoted =
          fatkuns.mtype == "buttonsMessage"
            ? fatkuns[Object.keys(fatkuns)[1]]
            : fatkuns.mtype == "templateMessage"
            ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]]
            : fatkuns.mtype == "product"
            ? fatkuns[Object.keys(fatkuns)[0]]
            : m.quoted
            ? m.quoted
            : m;
        const mime = (quoted.msg || quoted).mimetype || "";
        const qmsg = quoted.msg || quoted;
        const isMedia = /image|video|sticker|audio/.test(mime);
        //User
        const botNumber = await ryozingod.decodeJid(ryozingod.user.id);
        const itsMe = m.sender == botNumber ? true : false;
        const orgkaya = JSON.parse(fs.readFileSync("./dtbs/premium.json"));
        const kontributor = JSON.parse(fs.readFileSync("./dtbs/owner.json"));
        const iniseller = JSON.parse(fs.readFileSync("./dtbs/seller.json"));
        const contacts = JSON.parse(fs.readFileSync("./dtbs/contacts.json"));
        const isContacts = contacts.includes(m.sender);
        const isReseller = [botNumber, ...iniseller, ...kontributor]
          .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
          .includes(m.sender);
        const isDeveloper = [botNumber, ...kontributor, ...global.owner]
          .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
          .includes(m.sender);
        const isPremium =
          isDeveloper || isDeveloper || checkPremiumUser(m.sender, orgkaya);
        const isAfkOn = afk.checkAfkUser(m.sender, _afk);
        //=================================================//
        //Group
        const groupMetadata = m.isGroup
          ? await ryozingod.groupMetadata(m.chat).catch((e) => {})
          : "";
        const groupName = m.isGroup ? groupMetadata.subject : "";
        const participants = m.isGroup ? await groupMetadata.participants : "";
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : "";
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
        const isGroup = m.chat.endsWith("@g.us");
        const groupOwner = m.isGroup ? groupMetadata.owner : "";
        const isGroupOwner = m.isGroup
          ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender)
          : false;
        const AntiLink = m.isGroup ? ntilink.includes(m.chat) : false;
        const AntiVirtex = m.isGroup ? ntvirtex.includes(m.chat) : false;
        const AntiLinkYoutubeVid = m.isGroup
          ? ntilinkytvid.includes(m.chat)
          : false;
        const AntiLinkYoutubeChannel = m.isGroup
          ? ntilinkytch.includes(m.chat)
          : false;
        const AntiLinkInstagram = m.isGroup
          ? ntilinkig.includes(m.chat)
          : false;
        const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(m.chat) : false;
        const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(m.chat) : false;
        const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(m.chat) : false;
        const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(m.chat) : false;
        const AntiLinkAll = m.isGroup ? ntilinkall.includes(m.chat) : false;
        const AntiWame = m.isGroup ? ntwame.includes(m.chat) : false;
        const AntiToxic = m.isGroup ? nttoxic.includes(m.chat) : false;
        const AntiAsing = m.isGroup ? ntasing.includes(m.chat) : false;

        //=================================================//
        try {
          const isNumber = (x) => typeof x === "number" && !isNaN(x);
          const user = db.data.users[m.sender];
          if (typeof user !== "object") db.data.users[m.sender] = {};
          const chats = db.data.chats[m.chat];
          if (typeof chats !== "object") db.data.chats[m.chat] = {};
          if (user) {
            if (!isNumber(user.money)) user.money = 0;
            if (!isNumber(user.chip)) user.chip = 0;
            if (!isNumber(user.atm)) user.atm = 0;
            if (!isNumber(user.fullatm)) user.fullatm = 0;
            if (!isNumber(user.bank)) user.bank = 0;
            if (!isNumber(user.health)) user.health = 100;
            if (!isNumber(user.potion)) user.potion = 0;
            if (!isNumber(user.trash)) user.trash = 0;
            if (!isNumber(user.wood)) user.wood = 0;
            if (!isNumber(user.rock)) user.rock = 0;
            if (!isNumber(user.string)) user.string = 0;
            if (!isNumber(user.petfood)) user.petfood = 0;
            if (!isNumber(user.emerald)) user.emerald = 0;
            if (!isNumber(user.diamond)) user.diamond = 0;
            if (!isNumber(user.gold)) user.gold = 0;
            if (!isNumber(user.botol)) user.botol = 0;
            if (!isNumber(user.kardus)) user.kardus = 0;
            if (!isNumber(user.kaleng)) user.kaleng = 0;
            if (!isNumber(user.gelas)) user.gelas = 0;
            if (!isNumber(user.plastik)) user.plastik = 0;
            if (!isNumber(user.iron)) user.iron = 0;
            if (!isNumber(user.common)) user.common = 0;
            if (!isNumber(user.uncommon)) user.uncommon = 0;
            if (!isNumber(user.mythic)) user.mythic = 0;
            if (!isNumber(user.legendary)) user.legendary = 0;
            if (!isNumber(user.umpan)) user.umpan = 0;
            if (!isNumber(user.pet)) user.pet = 0;
            if (!isNumber(user.paus)) user.paus = 0;
            if (!isNumber(user.kepiting)) user.kepiting = 0;
            if (!isNumber(user.gurita)) user.gurita = 0;
            if (!isNumber(user.cumi)) user.cumi = 0;
            if (!isNumber(user.buntal)) user.buntal = 0;
            if (!isNumber(user.dory)) user.dory = 0;
            if (!isNumber(user.lumba)) user.lumba = 0;
            if (!isNumber(user.lobster)) user.lobster = 0;
            if (!isNumber(user.hiu)) user.hiu = 0;
            if (!isNumber(user.udang)) user.udang = 0;
            if (!isNumber(user.orca)) user.orca = 0;
            if (!isNumber(user.banteng)) user.banteng = 0;
            if (!isNumber(user.gajah)) user.gajah = 0;
            if (!isNumber(user.harimau)) user.harimau = 0;
            if (!isNumber(user.kambing)) user.kambing = 0;
            if (!isNumber(user.panda)) user.panda = 0;
            if (!isNumber(user.buaya)) user.buaya = 0;
            if (!isNumber(user.kerbau)) user.kerbau = 0;
            if (!isNumber(user.sapi)) user.sapi = 0;
            if (!isNumber(user.monyet)) user.monyet = 0;
            if (!isNumber(user.babihutan)) user.babihutan = 0;
            if (!isNumber(user.babi)) user.babi = 0;
            if (!isNumber(user.ayam)) user.ayam = 0;
            if (!isNumber(user.lastadventure)) user.lastadventure = 0;
            if (!isNumber(user.lastkill)) user.lastkill = 0;
            if (!isNumber(user.lastmisi)) user.lastmisi = 0;
            if (!isNumber(user.lastdungeon)) user.lastdungeon = 0;
            if (!isNumber(user.lastwar)) user.lastwar = 0;
            if (!isNumber(user.lastsda)) user.lastsda = 0;
            if (!isNumber(user.lastduel)) user.lastduel = 0;
            if (!isNumber(user.lastmining)) user.lastmining = 0;
            if (!isNumber(user.lasthunt)) user.lasthunt = 0;
            if (!isNumber(user.lastgift)) user.lastgift = 0;
            if (!isNumber(user.lastberkebon)) user.lastberkebon = 0;
            if (!isNumber(user.lastdagang)) user.lastdagang = 0;
            if (!isNumber(user.lasthourly)) user.lasthourly = 0;
            if (!isNumber(user.lastbansos)) user.lastbansos = 0;
            if (!isNumber(user.lastrampok)) user.lastrampok = 0;
            if (!isNumber(user.lastclaim)) user.lastclaim = 0;
            if (!isNumber(user.lastnebang)) user.lastnebang = 0;
            if (!isNumber(user.lastweekly)) user.lastweekly = 0;
            if (!isNumber(user.lastmonthly)) user.lastmonthly = 0;
            if (!isNumber(user.apel)) user.apel = 0;
            if (!isNumber(user.anggur)) user.anggur = 0;
            if (!isNumber(user.jeruk)) user.jeruk = 0;
            if (!isNumber(user.mangga)) user.mangga = 0;
            if (!isNumber(user.pisang)) user.pisang = 0;
            if (!isNumber(user.makanan)) user.makanan = 0;
            if (!isNumber(user.bibitanggur)) user.bibitanggur = 0;
            if (!isNumber(user.bibitpisang)) user.bibitpisang = 0;
            if (!isNumber(user.bibitapel)) user.bibitapel = 0;
            if (!isNumber(user.bibitmangga)) user.bibitmangga = 0;
            if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0;
            if (!isNumber(user.horse)) user.horse = 0;
            if (!isNumber(user.exp)) user.exp = 0;
            if (!isNumber(user.horseexp)) user.horseexp = 0;
            if (!isNumber(user.cat)) user.cat = 0;
            if (!isNumber(user.catexp)) user.catexp = 0;
            if (!isNumber(user.fox)) user.fox = 0;
            if (!isNumber(user.foxhexp)) user.foxexp = 0;
            if (!isNumber(user.dog)) user.foxexp = 0;
            if (!isNumber(user.dogexp)) user.dogexp = 0;
            if (!isNumber(user.robo)) user.robo = 0;
            if (!isNumber(user.roboexp)) user.roboexp = 0;
            if (!isNumber(user.horselastfeed)) user.horselastfeed = 0;
            if (!isNumber(user.catlastfeed)) user.catlastfeed = 0;
            if (!isNumber(user.robolastfeed)) user.robolastfeed = 0;
            if (!isNumber(user.foxlastfeed)) user.foxlastfeed = 0;
            if (!isNumber(user.doglastfeed)) user.doglastfeed = 0;
            if (!isNumber(user.robo)) user.robo = 0;
            if (!isNumber(user.robodurability)) user.robodurability = 0;
            if (!isNumber(user.armor)) user.armor = 0;
            if (!isNumber(user.armordurability)) user.armordurability = 0;
            if (!isNumber(user.sword)) user.sword = 0;
            if (!isNumber(user.sworddurability)) user.sworddurability = 0;
            if (!isNumber(user.pickaxe)) user.pickaxe = 0;
            if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0;
            if (!isNumber(user.fishingrod)) user.fishingrod = 0;
            if (!isNumber(user.fishingroddurability))
              user.fishingroddurability = 0;
            if (!user.premium) user.premiumTime = 0;
            if (!("afkReason" in user)) user.afkReason = "";
            if (!("premium" in user)) user.premium = false;
          } else
            db.data.users[m.sender] = {
              afkTime: -1,
              afkReason: "",
              premiumTime: 0,
              premium: false,
              money: 30000,
              exp: 0,
              limit: 30,
              freelimit: 0,
              lastclaim: 0,
              skata: 0,
              registered: false,
              name: m.name,
              pc: 0,
              joinlimit: 1,
              age: -1,
              regTime: -1,
              unreg: false,
              afk: -1,
              afkReason: "",
              banned: false,
              bannedTime: 0,
              warning: 0,
              level: 0,
              rokets: 0,
              role: "Beginner",
              skill: "",
              ojekk: 0,
              WarnReason: "",
              chip: 0,
              bank: 0,
 
