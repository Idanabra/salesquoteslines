/* @ds-bundle: {"format":4,"namespace":"SAPHorizonDesignSystem_f0bcbb","components":[{"name":"Avatar","sourcePath":"components/data/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data/Badge.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"ObjectStatus","sourcePath":"components/data/ObjectStatus.jsx"},{"name":"Token","sourcePath":"components/data/Token.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"MessageStrip","sourcePath":"components/feedback/MessageStrip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"SAP_ICON_GLYPHS","sourcePath":"components/foundation/Icon.jsx"},{"name":"Icon","sourcePath":"components/foundation/Icon.jsx"},{"name":"ShellBar","sourcePath":"components/navigation/ShellBar.jsx"}],"sourceHashes":{"components/data/Avatar.jsx":"da5ef2d2cf22","components/data/Badge.jsx":"17b78d8819f5","components/data/Card.jsx":"3d09d01d735e","components/data/ObjectStatus.jsx":"6f58a73ef83e","components/data/Token.jsx":"77493478c04e","components/feedback/Dialog.jsx":"b46edd2a9698","components/feedback/MessageStrip.jsx":"e4667361b648","components/forms/Button.jsx":"eb075fb6f490","components/forms/Checkbox.jsx":"e658a02a5086","components/forms/Input.jsx":"259442dacc68","components/forms/Select.jsx":"efc31510b71a","components/forms/Switch.jsx":"27734125201c","components/foundation/Icon.jsx":"246d71734def","components/navigation/ShellBar.jsx":"52f4485484f9","ui_kits/sample-management/App.jsx":"4a81f5d08279","ui_kits/sample-management/data.js":"ae8bcfe8c443"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SAPHorizonDesignSystem_f0bcbb = window.SAPHorizonDesignSystem_f0bcbb || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data/Badge.jsx
try { (() => {
const SCHEMES = {
  Neutral: {
    bg: "var(--sapNeutralBackground)",
    fg: "var(--sapNeutralTextColor)",
    bd: "var(--sapNeutralBorderColor)"
  },
  Information: {
    bg: "var(--sapInformationBackground)",
    fg: "var(--sapInformativeTextColor)",
    bd: "var(--sapInformationBorderColor)"
  },
  Success: {
    bg: "var(--sapSuccessBackground)",
    fg: "var(--sapPositiveTextColor)",
    bd: "var(--sapSuccessBorderColor)"
  },
  Warning: {
    bg: "var(--sapWarningBackground)",
    fg: "var(--sapCriticalTextColor)",
    bd: "var(--sapWarningBorderColor)"
  },
  Error: {
    bg: "var(--sapErrorBackground)",
    fg: "var(--sapNegativeTextColor)",
    bd: "var(--sapErrorBorderColor)"
  }
};

/** SAP Horizon badge — a compact tinted status pill. */
function Badge({
  children,
  colorScheme = "Neutral",
  style
}) {
  const s = SCHEMES[colorScheme] || SCHEMES.Neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      height: "1.25rem",
      padding: "0 .5rem",
      fontFamily: "var(--sapFontFamily)",
      fontSize: "var(--sapFontSmallSize)",
      fontWeight: 600,
      lineHeight: 1,
      color: s.fg,
      background: s.bg,
      border: `.0625rem solid ${s.bd}`,
      borderRadius: ".625rem",
      whiteSpace: "nowrap",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
/** SAP Horizon card container — white surface, 12px radius, resting shadow. */
function Card({
  title,
  subtitle,
  headerIcon,
  headerAction,
  children,
  style,
  bodyStyle
}) {
  const hasHeader = title || subtitle || headerAction;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--sapTileBackground,#fff)",
      borderRadius: "var(--sapElement_BorderCornerRadius)",
      boxShadow: "var(--sapContent_Shadow0)",
      overflow: "hidden",
      fontFamily: "var(--sapFontFamily)",
      color: "var(--sapTextColor)",
      ...style
    }
  }, hasHeader && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: ".75rem",
      padding: "1rem 1rem .75rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--sapFontHeaderFamily)",
      fontWeight: 700,
      fontSize: "1rem",
      color: "var(--sapTitleColor)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--sapFontSmallSize)",
      color: "var(--sapContent_LabelColor)",
      marginTop: ".125rem"
    }
  }, subtitle)), headerAction), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: hasHeader ? "0 1rem 1rem" : "1rem",
      ...bodyStyle
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/** SAP Horizon switch (on/off toggle). */
function Switch({
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  label,
  id,
  style
}) {
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };
  const track = {
    position: "relative",
    width: "2.75rem",
    height: "1.375rem",
    flexShrink: 0,
    borderRadius: "6.25rem",
    boxSizing: "border-box",
    background: on ? "var(--sapButton_Track_Selected_Background,#0064d9)" : "var(--sapButton_Track_Background,#788fa6)",
    border: `.0625rem solid ${on ? "var(--sapHighlightColor)" : "var(--sapNeutralElementColor)"}`,
    transition: "background-color .15s ease",
    cursor: disabled ? "not-allowed" : "pointer"
  };
  const handle = {
    position: "absolute",
    top: ".125rem",
    left: on ? "1.5rem" : ".125rem",
    width: "1rem",
    height: "1rem",
    borderRadius: "50%",
    background: "#fff",
    boxShadow: "0 .0625rem .125rem rgba(34,53,72,.4)",
    transition: "left .15s ease"
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    onClick: toggle,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: ".5rem",
      opacity: disabled ? 0.4 : 1,
      fontFamily: "var(--sapFontFamily)",
      fontSize: "var(--sapFontSize)",
      color: "var(--sapTextColor)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: track
  }, /*#__PURE__*/React.createElement("span", {
    style: handle
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/foundation/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// SAP-icons name → glyph codepoint map (703 icons), generated from
// @sap-theming/theming-base-content · SAP-icons.json. Requires the "SAP-icons"
// @font-face (shipped in tokens/fonts.css) to be loaded.
const SAP_ICON_GLYPHS = {
  "accidental-leave": "\ue000",
  "account": "\ue001",
  "wrench": "\ue002",
  "windows-doors": "\ue003",
  "washing-machine": "\ue004",
  "visits": "\ue005",
  "video": "\ue006",
  "travel-expense": "\ue007",
  "temperature": "\ue008",
  "task": "\ue009",
  "synchronize": "\ue00a",
  "survey": "\ue00b",
  "settings": "\ue00c",
  "search": "\ue00d",
  "sales-document": "\ue00e",
  "retail-store": "\ue00f",
  "refresh": "\ue010",
  "product": "\ue011",
  "present": "\ue012",
  "ppt-attachment": "\ue013",
  "pool": "\ue014",
  "pie-chart": "\ue015",
  "picture": "\ue016",
  "photo-voltaic": "\ue017",
  "phone": "\ue018",
  "pending": "\ue019",
  "pdf-attachment": "\ue01a",
  "past": "\ue01b",
  "outgoing-call": "\ue01c",
  "opportunity": "\ue01d",
  "opportunities": "\ue01e",
  "notes": "\ue01f",
  "money-bills": "\ue020",
  "map": "\ue021",
  "log": "\ue022",
  "line-charts": "\ue023",
  "lightbulb": "\ue024",
  "leads": "\ue025",
  "lead": "\ue026",
  "laptop": "\ue027",
  "kpi-managing-my-area": "\ue028",
  "kpi-corporate-performance": "\ue029",
  "incoming-call": "\ue02a",
  "inbox": "\ue02b",
  "horizontal-bar-chart": "\ue02c",
  "history": "\ue02d",
  "heating-cooling": "\ue02e",
  "gantt-bars": "\ue02f",
  "future": "\ue030",
  "fridge": "\ue031",
  "fallback": "\ue032",
  "expense-report": "\ue033",
  "excel-attachment": "\ue034",
  "energy-saving-lightbulb": "\ue035",
  "employee": "\ue036",
  "email": "\ue037",
  "edit": "\ue038",
  "duplicate": "\ue039",
  "download": "\ue03a",
  "doc-attachment": "\ue03b",
  "dishwasher": "\ue03c",
  "delete": "\ue03d",
  "decline": "\ue03e",
  "complete": "\ue03f",
  "competitor": "\ue040",
  "collections-management": "\ue041",
  "chalkboard": "\ue042",
  "cart": "\ue043",
  "card": "\ue044",
  "camera": "\ue045",
  "calendar": "\ue046",
  "begin": "\ue047",
  "basket": "\ue048",
  "bar-chart": "\ue049",
  "attachment": "\ue04a",
  "arrow-top": "\ue04b",
  "arrow-right": "\ue04c",
  "arrow-left": "\ue04d",
  "arrow-bottom": "\ue04e",
  "approvals": "\ue04f",
  "appointment": "\ue050",
  "alphabetical-order": "\ue051",
  "along-stacked-chart": "\ue052",
  "alert": "\ue053",
  "addresses": "\ue054",
  "address-book": "\ue055",
  "add-filter": "\ue056",
  "add-favorite": "\ue057",
  "add": "\ue058",
  "activities": "\ue059",
  "action": "\ue05a",
  "accept": "\ue05b",
  "hint": "\ue05c",
  "group": "\ue05d",
  "check-availability": "\ue05e",
  "weather-proofing": "\ue05f",
  "payment-approval": "\ue060",
  "batch-payments": "\ue061",
  "bed": "\ue062",
  "arobase": "\ue063",
  "family-care": "\ue064",
  "favorite": "\ue065",
  "navigation-right-arrow": "\ue066",
  "navigation-left-arrow": "\ue067",
  "e-care": "\ue068",
  "less": "\ue069",
  "lateness": "\ue06a",
  "lab": "\ue06b",
  "internet-browser": "\ue06c",
  "instance": "\ue06d",
  "inspection": "\ue06e",
  "image-viewer": "\ue06f",
  "home": "\ue070",
  "grid": "\ue071",
  "goalseek": "\ue072",
  "general-leave-request": "\ue073",
  "create-leave-request": "\ue074",
  "flight": "\ue075",
  "filter": "\ue076",
  "favorite-list": "\ue077",
  "factory": "\ue078",
  "endoscopy": "\ue079",
  "employee-pane": "\ue07a",
  "employee-approvals": "\ue07b",
  "email-read": "\ue07c",
  "electrocardiogram": "\ue07d",
  "documents": "\ue07e",
  "decision": "\ue07f",
  "database": "\ue080",
  "customer-history": "\ue081",
  "customer": "\ue082",
  "credit-card": "\ue083",
  "create-entry-time": "\ue084",
  "contacts": "\ue085",
  "compare": "\ue086",
  "clinical-order": "\ue087",
  "chain-link": "\ue088",
  "pull-down": "\ue089",
  "cargo-train": "\ue08a",
  "car-rental": "\ue08b",
  "business-card": "\ue08c",
  "bar-code": "\ue08d",
  "folder-blank": "\ue08e",
  "passenger-train": "\ue08f",
  "question-mark": "\ue090",
  "world": "\ue091",
  "iphone": "\ue092",
  "ipad": "\ue093",
  "warning": "\ue094",
  "sort": "\ue095",
  "course-book": "\ue096",
  "course-program": "\ue097",
  "add-coursebook": "\ue098",
  "print": "\ue099",
  "save": "\ue09a",
  "play": "\ue09b",
  "pause": "\ue09c",
  "record": "\ue09d",
  "response": "\ue09e",
  "pushpin-on": "\ue09f",
  "pushpin-off": "\ue0a0",
  "unfavorite": "\ue0a1",
  "learning-assistant": "\ue0a2",
  "timesheet": "\ue0a3",
  "time-entry-request": "\ue0a4",
  "list": "\ue0a5",
  "action-settings": "\ue0a6",
  "share": "\ue0a7",
  "feed": "\ue0a8",
  "role": "\ue0a9",
  "flag": "\ue0aa",
  "post": "\ue0ab",
  "inspect": "\ue0ac",
  "inspect-down": "\ue0ad",
  "appointment-2": "\ue0ae",
  "target-group": "\ue0af",
  "marketing-campaign": "\ue0b0",
  "message-error": "\ue0b1",
  "comment": "\ue0b2",
  "shipping-status": "\ue0b3",
  "collaborate": "\ue0b4",
  "shortcut": "\ue0b5",
  "lead-outdated": "\ue0b6",
  "tools-opportunity": "\ue0b7",
  "permission": "\ue0b8",
  "supplier": "\ue0b9",
  "table-view": "\ue0ba",
  "table-chart": "\ue0bb",
  "switch-views": "\ue0bc",
  "e-learning": "\ue0bd",
  "manager": "\ue0be",
  "switch-classes": "\ue0bf",
  "simple-payment": "\ue0c0",
  "signature": "\ue0c1",
  "sales-order-item": "\ue0c2",
  "sales-order": "\ue0c3",
  "request": "\ue0c4",
  "receipt": "\ue0c5",
  "puzzle": "\ue0c6",
  "process": "\ue0c7",
  "private": "\ue0c8",
  "popup-window": "\ue0c9",
  "person-placeholder": "\ue0ca",
  "per-diem": "\ue0cb",
  "paper-plane": "\ue0cc",
  "paid-leave": "\ue0cd",
  "pdf-reader": "\ue0ce",
  "overview-chart": "\ue0cf",
  "overlay": "\ue0d0",
  "org-chart": "\ue0d1",
  "number-sign": "\ue0d2",
  "notification-2": "\ue0d3",
  "my-sales-order": "\ue0d4",
  "meal": "\ue0d5",
  "loan": "\ue0d6",
  "order-status": "\ue0d7",
  "customer-order-entry": "\ue0d8",
  "performance": "\ue0d9",
  "menu": "\ue0da",
  "employee-lookup": "\ue0db",
  "education": "\ue0dc",
  "customer-briefing": "\ue0dd",
  "customer-and-contacts": "\ue0de",
  "my-view": "\ue0df",
  "accelerated": "\ue0e0",
  "to-be-reviewed": "\ue0e1",
  "warning2": "\ue0e2",
  "feeder-arrow": "\ue0e3",
  "quality-issue": "\ue0e4",
  "workflow-tasks": "\ue0e5",
  "create": "\ue0e6",
  "home-share": "\ue0e7",
  "globe": "\ue0e8",
  "tags": "\ue0e9",
  "work-history": "\ue0ea",
  "x-ray": "\ue0eb",
  "wounds-doc": "\ue0ec",
  "web-cam": "\ue0ed",
  "waiver": "\ue0ee",
  "vertical-bar-chart": "\ue0ef",
  "upstacked-chart": "\ue0f0",
  "trip-report": "\ue0f1",
  "microphone": "\ue0f2",
  "unpaid-leave": "\ue0f3",
  "tree": "\ue0f4",
  "toaster-up": "\ue0f5",
  "toaster-top": "\ue0f6",
  "toaster-down": "\ue0f7",
  "time-account": "\ue0f8",
  "theater": "\ue0f9",
  "taxi": "\ue0fa",
  "subway-train": "\ue0fb",
  "study-leave": "\ue0fc",
  "stethoscope": "\ue0fd",
  "step": "\ue0fe",
  "sonography": "\ue0ff",
  "soccer": "\ue100",
  "physical-activity": "\ue101",
  "pharmacy": "\ue102",
  "official-service": "\ue103",
  "offsite-work": "\ue104",
  "nutrition-activity": "\ue105",
  "newspaper": "\ue106",
  "monitor-payments": "\ue107",
  "map-2": "\ue108",
  "machine": "\ue109",
  "mri-scan": "\ue10a",
  "end-user-experience-monitoring": "\ue10b",
  "unwired": "\ue10c",
  "customer-financial-fact-sheet": "\ue10d",
  "retail-store-manager": "\ue10e",
  "Netweaver-business-client": "\ue10f",
  "electronic-medical-record": "\ue110",
  "eam-work-order": "\ue111",
  "customer-view": "\ue112",
  "crm-service-manager": "\ue113",
  "crm-sales": "\ue114",
  "widgets": "\ue115",
  "commission-check": "\ue116",
  "collections-insight": "\ue117",
  "clinical-task-tracker": "\ue118",
  "citizen-connect": "\ue119",
  "cart-approval": "\ue11a",
  "capital-projects": "\ue11b",
  "bo-strategy-management": "\ue11c",
  "business-objects-mobile": "\ue11d",
  "business-objects-explorer": "\ue11e",
  "business-objects-experience": "\ue11f",
  "bbyd-dashboard": "\ue120",
  "bbyd-active-sales": "\ue121",
  "business-by-design": "\ue122",
  "business-one": "\ue123",
  "sap-box": "\ue124",
  "manager-insight": "\ue125",
  "accounting-document-verification": "\ue126",
  "hr-approval": "\ue127",
  "idea-wall": "\ue128",
  "Chart-Tree-Map": "\ue129",
  "cart-5": "\ue12a",
  "cart-4": "\ue12b",
  "wallet": "\ue12c",
  "vehicle-repair": "\ue12d",
  "upload": "\ue12e",
  "unlocked": "\ue12f",
  "umbrella": "\ue130",
  "travel-request": "\ue131",
  "travel-expense-report": "\ue132",
  "travel-itinerary": "\ue133",
  "time-overtime": "\ue134",
  "thing-type": "\ue135",
  "technical-object": "\ue136",
  "tag": "\ue137",
  "syringe": "\ue138",
  "syntax": "\ue139",
  "suitcase": "\ue13a",
  "simulate": "\ue13b",
  "shield": "\ue13c",
  "share-2": "\ue13d",
  "sales-quote": "\ue13e",
  "repost": "\ue13f",
  "provision": "\ue140",
  "projector": "\ue141",
  "add-product": "\ue142",
  "pipeline-analysis": "\ue143",
  "add-photo": "\ue144",
  "palette": "\ue145",
  "nurse": "\ue146",
  "sales-notification": "\ue147",
  "mileage": "\ue148",
  "meeting-room": "\ue149",
  "media-forward": "\ue14a",
  "media-play": "\ue14b",
  "media-pause": "\ue14c",
  "media-reverse": "\ue14d",
  "media-rewind": "\ue14e",
  "measurement-document": "\ue14f",
  "measuring-point": "\ue150",
  "measure": "\ue151",
  "map-3": "\ue152",
  "locked": "\ue153",
  "letter": "\ue154",
  "journey-arrive": "\ue155",
  "journey-change": "\ue156",
  "journey-depart": "\ue157",
  "it-system": "\ue158",
  "it-instance": "\ue159",
  "it-host": "\ue15a",
  "iphone-2": "\ue15b",
  "ipad-2": "\ue15c",
  "inventory": "\ue15d",
  "insurance-house": "\ue15e",
  "insurance-life": "\ue15f",
  "insurance-car": "\ue160",
  "initiative": "\ue161",
  "incident": "\ue162",
  "group-2": "\ue163",
  "goal": "\ue164",
  "functional-location": "\ue165",
  "full-screen": "\ue166",
  "form": "\ue167",
  "fob-watch": "\ue168",
  "blank-tag": "\ue169",
  "family-protection": "\ue16a",
  "folder": "\ue16b",
  "fax-machine": "\ue16c",
  "example": "\ue16d",
  "eraser": "\ue16e",
  "employee-rejections": "\ue16f",
  "drop-down-list": "\ue170",
  "draw-rectangle": "\ue171",
  "document": "\ue172",
  "doctor": "\ue173",
  "discussion-2": "\ue174",
  "discussion": "\ue175",
  "dimension": "\ue176",
  "customer-and-supplier": "\ue177",
  "crop": "\ue178",
  "add-contact": "\ue179",
  "compare-2": "\ue17a",
  "color-fill": "\ue17b",
  "collision": "\ue17c",
  "curriculum": "\ue17d",
  "chart-axis": "\ue17e",
  "full-stacked-chart": "\ue17f",
  "full-stacked-column-chart": "\ue180",
  "vertical-bar-chart-2": "\ue181",
  "horizontal-bar-chart-2": "\ue182",
  "horizontal-stacked-chart": "\ue183",
  "vertical-stacked-chart": "\ue184",
  "choropleth-chart": "\ue185",
  "geographic-bubble-chart": "\ue186",
  "multiple-radar-chart": "\ue187",
  "radar-chart": "\ue188",
  "crossed-line-chart": "\ue189",
  "multiple-line-chart": "\ue18a",
  "multiple-bar-chart": "\ue18b",
  "line-chart": "\ue18c",
  "line-chart-dual-axis": "\ue18d",
  "bubble-chart": "\ue18e",
  "scatter-chart": "\ue18f",
  "multiple-pie-chart": "\ue190",
  "column-chart-dual-axis": "\ue191",
  "tag-cloud-chart": "\ue192",
  "area-chart": "\ue193",
  "cause": "\ue194",
  "cart-3": "\ue195",
  "cart-2": "\ue196",
  "bus-public-transport": "\ue197",
  "burglary": "\ue198",
  "building": "\ue199",
  "border": "\ue19a",
  "bookmark": "\ue19b",
  "badge": "\ue19c",
  "attachment-audio": "\ue19d",
  "attachment-video": "\ue19e",
  "attachment-html": "\ue19f",
  "attachment-photo": "\ue1a0",
  "attachment-e-pub": "\ue1a1",
  "attachment-zip-file": "\ue1a2",
  "attachment-text-file": "\ue1a3",
  "add-equipment": "\ue1a4",
  "add-activity": "\ue1a5",
  "activity-individual": "\ue1a6",
  "activity-2": "\ue1a7",
  "add-activity-2": "\ue1a8",
  "activity-items": "\ue1a9",
  "activity-assigned-to-goal": "\ue1aa",
  "status-positive": "\ue1ab",
  "status-completed": "\ue1ab",
  "status-negative": "\ue1ac",
  "status-error": "\ue1ac",
  "status-inactive": "\ue1ad",
  "status-critical": "\ue1ae",
  "status-in-process": "\ue1ae",
  "blank-tag-2": "\ue1af",
  "cart-full": "\ue1b0",
  "locate-me": "\ue1b1",
  "paging": "\ue1b2",
  "company-view": "\ue1b3",
  "document-text": "\ue1b4",
  "explorer": "\ue1b5",
  "personnel-view": "\ue1b6",
  "sorting-ranking": "\ue1b7",
  "drill-down": "\ue1b8",
  "drill-up": "\ue1b9",
  "vds-file": "\ue1ba",
  "sap-logo-shape": "\ue1bb",
  "folder-full": "\ue1bc",
  "system-exit": "\ue1bd",
  "system-exit-2": "\ue1be",
  "close-command-field": "\ue1bf",
  "open-command-field": "\ue1c0",
  "sys-enter-2": "\ue1c1",
  "sys-enter": "\ue1c2",
  "sys-help-2": "\ue1c3",
  "sys-help": "\ue1c4",
  "sys-back": "\ue1c5",
  "sys-back-2": "\ue1c6",
  "sys-cancel": "\ue1c7",
  "sys-cancel-2": "\ue1c8",
  "open-folder": "\ue1c9",
  "sys-find-next": "\ue1ca",
  "sys-find": "\ue1cb",
  "sys-monitor": "\ue1cc",
  "sys-prev-page": "\ue1cd",
  "sys-first-page": "\ue1ce",
  "sys-next-page": "\ue1cf",
  "sys-last-page": "\ue1d0",
  "generate-shortcut": "\ue1d1",
  "create-session": "\ue1d2",
  "display-more": "\ue1d3",
  "enter-more": "\ue1d4",
  "zoom-in": "\ue1d5",
  "zoom-out": "\ue1d6",
  "header": "\ue1d7",
  "detail-view": "\ue1d8",
  "show-edit": "\ue1d8",
  "collapse": "\ue1d9",
  "expand": "\ue1da",
  "positive": "\ue1db",
  "negative": "\ue1dc",
  "display": "\ue1dd",
  "menu2": "\ue1de",
  "redo": "\ue1df",
  "undo": "\ue1e0",
  "navigation-up-arrow": "\ue1e1",
  "navigation-down-arrow": "\ue1e2",
  "down": "\ue1e3",
  "up": "\ue1e4",
  "shelf": "\ue1e5",
  "background": "\ue1e6",
  "resize": "\ue1e7",
  "move": "\ue1e8",
  "show": "\ue1e9",
  "hide": "\ue1ea",
  "nav-back": "\ue1eb",
  "error": "\ue1ec",
  "slim-arrow-right": "\ue1ed",
  "slim-arrow-left": "\ue1ee",
  "slim-arrow-down": "\ue1ef",
  "slim-arrow-up": "\ue1f0",
  "forward": "\ue1f1",
  "overflow": "\ue1f2",
  "value-help": "\ue1f3",
  "multi-select": "\ue1f4",
  "exit-full-screen": "\ue1f5",
  "sys-add": "\ue1f6",
  "sys-minus": "\ue1f7",
  "dropdown": "\ue1f8",
  "expand-group": "\ue1f9",
  "vertical-grip": "\ue1fa",
  "horizontal-grip": "\ue1fb",
  "sort-descending": "\ue1fc",
  "sort-ascending": "\ue1fd",
  "arrow-down": "\ue1fe",
  "legend": "\ue1ff",
  "collapse-group": "\ue200",
  "message-warning": "\ue201",
  "message-information": "\ue202",
  "message-success": "\ue203",
  "restart": "\ue204",
  "stop": "\ue205",
  "add-process": "\ue206",
  "cancel-maintenance": "\ue207",
  "activate": "\ue208",
  "resize-horizontal": "\ue209",
  "resize-vertical": "\ue20a",
  "connected": "\ue20b",
  "disconnected": "\ue20c",
  "edit-outside": "\ue20d",
  "key": "\ue20e",
  "minimize": "\ue20f",
  "back-to-top": "\ue210",
  "hello-world": "\ue211",
  "outbox": "\ue212",
  "donut-chart": "\ue213",
  "heatmap-chart": "\ue214",
  "horizontal-bullet-chart": "\ue215",
  "vertical-bullet-chart": "\ue216",
  "call": "\ue217",
  "download-from-cloud": "\ue218",
  "upload-to-cloud": "\ue219",
  "jam": "\ue21a",
  "sap-ui5": "\ue21b",
  "message-popup": "\ue21c",
  "cloud": "\ue21d",
  "horizontal-waterfall-chart": "\ue21e",
  "vertical-waterfall-chart": "\ue21f",
  "broken-link": "\ue220",
  "headset": "\ue221",
  "thumb-up": "\ue222",
  "thumb-down": "\ue223",
  "multiselect-all": "\ue224",
  "multiselect-none": "\ue225",
  "scissors": "\ue226",
  "sound": "\ue227",
  "sound-loud": "\ue228",
  "sound-off": "\ue229",
  "date-time": "\ue22a",
  "user-settings": "\ue22b",
  "key-user-settings": "\ue22c",
  "developer-settings": "\ue22d",
  "text-formatting": "\ue22e",
  "bold-text": "\ue22f",
  "italic-text": "\ue230",
  "underline-text": "\ue231",
  "text-align-justified": "\ue232",
  "text-align-left": "\ue233",
  "text-align-center": "\ue234",
  "text-align-right": "\ue235",
  "bullet-text": "\ue236",
  "numbered-text": "\ue237",
  "co": "\ue238",
  "ui-notifications": "\ue239",
  "bell": "\ue23a",
  "cancel-share": "\ue23b",
  "write-new-document": "\ue23c",
  "write-new": "\ue23d",
  "cancel": "\ue23e",
  "screen-split-one": "\ue23f",
  "screen-split-two": "\ue240",
  "screen-split-three": "\ue241",
  "customize": "\ue242",
  "user-edit": "\ue243",
  "source-code": "\ue244",
  "copy": "\ue245",
  "paste": "\ue246",
  "line-chart-time-axis": "\ue247",
  "clear-filter": "\ue248",
  "reset": "\ue249",
  "trend-up": "\ue24a",
  "trend-down": "\ue24b",
  "cursor-arrow": "\ue24c",
  "add-document": "\ue24d",
  "create-form": "\ue24e",
  "resize-corner": "\ue24f",
  "chevron-phase": "\ue250",
  "chevron-phase-2": "\ue251",
  "rhombus-milestone": "\ue252",
  "rhombus-milestone-2": "\ue253",
  "circle-task": "\ue254",
  "circle-task-2": "\ue255",
  "project-definition-triangle": "\ue256",
  "project-definition-triangle-2": "\ue257",
  "master-task-triangle": "\ue258",
  "master-task-triangle-2": "\ue259",
  "program-triangles": "\ue25a",
  "program-triangles-2": "\ue25b",
  "mirrored-task-circle": "\ue25c",
  "mirrored-task-circle-2": "\ue25d",
  "checklist-item": "\ue25e",
  "checklist-item-2": "\ue25f",
  "checklist": "\ue260",
  "checklist-2": "\ue261",
  "chart-table-view": "\ue262",
  "filter-analytics": "\ue263",
  "filter-facets": "\ue264",
  "filter-fields": "\ue265",
  "indent": "\ue266",
  "outdent": "\ue267",
  "heading1": "\ue268",
  "heading2": "\ue269",
  "heading3": "\ue26a",
  "decrease-line-height": "\ue26b",
  "increase-line-height": "\ue26c",
  "fx": "\ue26d",
  "add-folder": "\ue26e",
  "away": "\ue26f",
  "busy": "\ue270",
  "appear-offline": "\ue271",
  "blur": "\ue272",
  "pixelate": "\ue273",
  "horizontal-combination-chart": "\ue274",
  "add-employee": "\ue275",
  "text-color": "\ue276",
  "browse-folder": "\ue277",
  "primary-key": "\ue278",
  "two-keys": "\ue279",
  "strikethrough": "\ue27a",
  "text": "\ue27b",
  "responsive": "\ue27c",
  "desktop-mobile": "\ue27d",
  "table-row": "\ue27e",
  "table-column": "\ue27f",
  "validate": "\ue280",
  "keyboard-and-mouse": "\ue281",
  "touch": "\ue282",
  "expand-all": "\ue283",
  "collapse-all": "\ue284",
  "combine": "\ue285",
  "split": "\ue286",
  "megamenu": "\ue287",
  "feedback": "\ue288",
  "information": "\ue289",
  "s4hana": "\ue28a",
  "translate": "\ue28b",
  "clear-all": "\ue28c",
  "command-line-interfaces": "\ue28d",
  "sum": "\ue28e",
  "qr-code": "\ue28f",
  "space-navigation": "\ue290",
  "in-progress": "\ue291",
  "not-editable": "\ue292",
  "heart": "\ue293",
  "heart-2": "\ue294",
  "tri-state": "\ue295",
  "bookmark-2": "\ue296",
  "detail-less": "\ue297",
  "detail-more": "\ue298",
  "flag-2": "\ue299",
  "folder-2": "\ue29a",
  "paint-bucket": "\ue29b",
  "direction-arrows": "\ue29c",
  "non-binary": "\ue29d",
  "female": "\ue29e",
  "male": "\ue29f",
  "bell-2": "\ue2a0",
  "accessibility": "\ue2a1",
  "high-priority": "\ue2a2",
  "da": "\ue2a3",
  "da-2": "\ue2a4",
  "ai": "\ue2a5",
  "in-progress-2": "\ue2a6",
  "unsynchronize": "\ue2a7",
  "verified": "\ue2a8",
  "walk-me": "\ue2a9",
  "smart-watch": "\ue2aa",
  "vr-glasses": "\ue2ab",
  "gender-male-and-female": "\ue300",
  "rotate": "\ue301",
  "locate-me-2": "\ue302",
  "map-fill": "\ue303",
  "cloud-check": "\ue304",
  "enablement": "\ue305",
  "biometric-thumb": "\ue306",
  "biometric-face": "\ue307",
  "people-connected": "\ue308",
  "light-mode": "\ue309",
  "dark-mode": "\ue30a",
  "select-appointments": "\ue30b",
  "time-off": "\ue30c",
  "add-calendar": "\ue30d",
  "currency": "\ue30e"
};

/**
 * Icon — renders a single SAP-icons glyph by name (e.g. "add", "search",
 * "account", "sap-ui5"). Colour follows currentColor.
 */
function Icon({
  name,
  size = "1rem",
  color,
  title,
  style,
  className,
  ...rest
}) {
  const glyph = SAP_ICON_GLYPHS[name];
  const st = {
    fontFamily: '"SAP-icons"',
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 1,
    display: "inline-block",
    fontSize: size,
    color: color || "inherit",
    speak: "none",
    WebkitFontSmoothing: "antialiased",
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": title || name,
    title: title,
    className: className,
    style: st
  }, rest), glyph || "\ue0d9");
}
Object.assign(__ds_scope, { SAP_ICON_GLYPHS, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundation/Icon.jsx", error: String((e && e.message) || e) }); }

// components/data/Avatar.jsx
try { (() => {
const PALETTE = {
  1: {
    bg: "#fff3b8",
    fg: "#a45d00"
  },
  2: {
    bg: "#ffd0e7",
    fg: "#aa0808"
  },
  3: {
    bg: "#ffdbe7",
    fg: "#ba066c"
  },
  4: {
    bg: "#ffdcf3",
    fg: "#a100c2"
  },
  5: {
    bg: "#ded3ff",
    fg: "#552cff"
  },
  6: {
    bg: "#d1efff",
    fg: "#0057d2"
  },
  7: {
    bg: "#c2fcee",
    fg: "#046c7a"
  },
  8: {
    bg: "#ebf5cb",
    fg: "#256f3a"
  },
  9: {
    bg: "#ddccf0",
    fg: "#6c32a9"
  },
  10: {
    bg: "#eaecee",
    fg: "#556b82"
  }
};
const SIZES = {
  XS: "1.5rem",
  S: "2rem",
  M: "3rem",
  L: "4rem",
  XL: "5rem"
};
const FONT = {
  XS: ".75rem",
  S: ".875rem",
  M: "1.125rem",
  L: "1.5rem",
  XL: "2rem"
};

/** SAP Horizon avatar — initials, an icon, or an image in a circle. */
function Avatar({
  initials,
  icon,
  src,
  size = "M",
  colorScheme = 6,
  shape = "circle",
  style
}) {
  const dim = SIZES[size] || SIZES.M;
  const p = PALETTE[colorScheme] || PALETTE[6];
  const base = {
    width: dim,
    height: dim,
    flexShrink: 0,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: shape === "square" ? "var(--sapField_BorderCornerRadius)" : "50%",
    overflow: "hidden",
    fontFamily: "var(--sapFontFamily)",
    fontWeight: 600,
    fontSize: FONT[size] || FONT.M,
    ...style
  };
  if (src) return /*#__PURE__*/React.createElement("span", {
    style: base
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: initials || "avatar",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }));
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...base,
      background: p.bg,
      color: p.fg
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: FONT[size] || FONT.M
  }) : (initials || "").slice(0, 2).toUpperCase());
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data/ObjectStatus.jsx
try { (() => {
const STATE = {
  None: {
    color: "var(--sapTextColor)",
    icon: null
  },
  Positive: {
    color: "var(--sapPositiveTextColor)",
    icon: "sys-enter-2"
  },
  Negative: {
    color: "var(--sapNegativeTextColor)",
    icon: "error"
  },
  Critical: {
    color: "var(--sapCriticalTextColor)",
    icon: "alert"
  },
  Information: {
    color: "var(--sapInformativeTextColor)",
    icon: "information"
  },
  Neutral: {
    color: "var(--sapNeutralTextColor)",
    icon: "status-inactive"
  }
};

/** SAP Horizon ObjectStatus — semantic status text, optionally with a leading icon. */
function ObjectStatus({
  state = "None",
  icon,
  children,
  showIcon = true,
  style
}) {
  const s = STATE[state] || STATE.None;
  const glyph = icon || (showIcon ? s.icon : null);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: ".3125rem",
      fontFamily: "var(--sapFontFamily)",
      fontSize: "var(--sapFontSize)",
      fontWeight: 600,
      color: s.color,
      ...style
    }
  }, glyph && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: glyph,
    size: ".875rem"
  }), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { ObjectStatus });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ObjectStatus.jsx", error: String((e && e.message) || e) }); }

// components/data/Token.jsx
try { (() => {
/** SAP Horizon token — a small removable tag used inside multi-input fields and filters. */
function Token({
  children,
  onRemove,
  selected = false,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: ".25rem",
      height: "1.5rem",
      padding: "0 .5rem",
      fontFamily: "var(--sapFontFamily)",
      fontSize: "var(--sapFontSize)",
      color: "var(--sapTextColor)",
      background: selected ? "var(--sapButton_Selected_Background,#edf6ff)" : "var(--sapButton_TokenBackground,#fff)",
      border: `.0625rem solid ${selected ? "var(--sapHighlightColor)" : "var(--sapButton_BorderColor)"}`,
      borderRadius: "var(--sapButton_TokenBorderCornerRadius)",
      whiteSpace: "nowrap",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", null, children), onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: onRemove,
    style: {
      display: "inline-flex",
      cursor: "pointer",
      color: "var(--sapContent_IconColor)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "decline",
    size: ".625rem"
  })));
}
Object.assign(__ds_scope, { Token });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Token.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/** SAP Horizon dialog — modal overlay with header, content, and a footer action bar. */
function Dialog({
  open = true,
  title,
  children,
  footer,
  onClose,
  width = "480px",
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(34,53,72,.6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
      padding: "1rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: "calc(100vw - 2rem)",
      maxHeight: "90vh",
      display: "flex",
      flexDirection: "column",
      background: "var(--sapGroup_ContentBackground,#fff)",
      borderRadius: "var(--sapElement_BorderCornerRadius)",
      boxShadow: "var(--sapContent_Shadow2)",
      fontFamily: "var(--sapFontFamily)",
      color: "var(--sapTextColor)",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: ".75rem",
      padding: "1rem 1rem .75rem",
      borderBottom: ".0625rem solid var(--sapGroup_ContentBorderColor)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontFamily: "var(--sapFontHeaderFamily)",
      fontWeight: 700,
      fontSize: "1.125rem",
      color: "var(--sapTitleColor)"
    }
  }, title), onClose && /*#__PURE__*/React.createElement("span", {
    onClick: onClose,
    style: {
      cursor: "pointer",
      display: "inline-flex",
      color: "var(--sapContent_IconColor)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "decline",
    size: "1rem"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "1rem",
      overflowY: "auto",
      flex: 1
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: ".5rem",
      padding: ".75rem 1rem",
      borderTop: ".0625rem solid var(--sapGroup_ContentBorderColor)"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/MessageStrip.jsx
try { (() => {
const KIND = {
  Information: {
    bg: "var(--sapInformationBackground)",
    bd: "var(--sapInformationBorderColor)",
    icon: "information",
    fg: "var(--sapInformativeTextColor)"
  },
  Success: {
    bg: "var(--sapSuccessBackground)",
    bd: "var(--sapSuccessBorderColor)",
    icon: "sys-enter-2",
    fg: "var(--sapPositiveTextColor)"
  },
  Warning: {
    bg: "var(--sapWarningBackground)",
    bd: "var(--sapWarningBorderColor)",
    icon: "alert",
    fg: "var(--sapCriticalTextColor)"
  },
  Error: {
    bg: "var(--sapErrorBackground)",
    bd: "var(--sapErrorBorderColor)",
    icon: "error",
    fg: "var(--sapNegativeTextColor)"
  }
};

/** SAP Horizon MessageStrip — an inline banner with a semantic colour and icon. */
function MessageStrip({
  design = "Information",
  children,
  onClose,
  showIcon = true,
  style
}) {
  const k = KIND[design] || KIND.Information;
  return /*#__PURE__*/React.createElement("div", {
    role: "note",
    style: {
      display: "flex",
      alignItems: "center",
      gap: ".5rem",
      padding: ".5rem .75rem",
      background: k.bg,
      border: `.0625rem solid ${k.bd}`,
      borderRadius: "var(--sapField_BorderCornerRadius)",
      fontFamily: "var(--sapFontFamily)",
      fontSize: "var(--sapFontSize)",
      color: "var(--sapTextColor)",
      ...style
    }
  }, showIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: k.icon,
    size: "1rem",
    color: k.fg
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, children), onClose && /*#__PURE__*/React.createElement("span", {
    onClick: onClose,
    style: {
      cursor: "pointer",
      color: "var(--sapContent_IconColor)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "decline",
    size: ".75rem"
  })));
}
Object.assign(__ds_scope, { MessageStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/MessageStrip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const RADIUS = "var(--sapButton_BorderCornerRadius)";
const HEIGHT = {
  cozy: "var(--sapElement_Height)",
  compact: "var(--sapElement_Compact_Height)"
};
const DESIGNS = {
  default: {
    background: "var(--sapButton_Background)",
    border: "var(--sapButton_BorderColor)",
    color: "var(--sapButton_TextColor)",
    hover: "var(--sapButton_Hover_Background)",
    font: 600
  },
  emphasized: {
    background: "var(--sapButton_Emphasized_Background)",
    border: "var(--sapButton_Emphasized_Background)",
    color: "var(--sapButton_Emphasized_TextColor)",
    hover: "var(--sapButton_Emphasized_Hover_Background)",
    font: 700
  },
  transparent: {
    background: "transparent",
    border: "transparent",
    color: "var(--sapButton_TextColor)",
    hover: "var(--sapButton_Lite_Hover_Background)",
    font: 600
  },
  positive: {
    background: "var(--sapButton_Accept_Background)",
    border: "var(--sapButton_Accept_BorderColor)",
    color: "var(--sapButton_Accept_TextColor)",
    hover: "#e3f1b6",
    font: 600
  },
  negative: {
    background: "var(--sapButton_Reject_Background)",
    border: "var(--sapButton_Reject_BorderColor)",
    color: "var(--sapButton_Reject_TextColor)",
    hover: "#ffbddb",
    font: 600
  },
  attention: {
    background: "#fff3b7",
    border: "#ffeb84",
    color: "#b44f00",
    hover: "#ffef9e",
    font: 600
  }
};

/** SAP Horizon Button. */
function Button({
  children,
  design = "default",
  icon,
  iconEnd,
  size = "cozy",
  disabled = false,
  onClick,
  type = "button",
  style,
  title,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const d = DESIGNS[design] || DESIGNS.default;
  const iconOnly = !children && (icon || iconEnd);
  const st = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: ".5rem",
    boxSizing: "border-box",
    minHeight: HEIGHT[size],
    minWidth: iconOnly ? HEIGHT[size] : "2.25rem",
    padding: iconOnly ? "0" : size === "compact" ? "0 .625rem" : "0 .6875rem",
    fontFamily: "var(--sapButton_FontFamily)",
    fontSize: "var(--sapFontSize)",
    fontWeight: d.font,
    lineHeight: 1.25,
    color: d.color,
    background: hover && !disabled ? d.hover : d.background,
    border: `var(--sapElement_BorderWidth) solid ${d.border}`,
    borderRadius: RADIUS,
    cursor: disabled ? "default" : "pointer",
    opacity: disabled ? 0.4 : 1,
    transition: "background-color .1s ease-in",
    userSelect: "none",
    whiteSpace: "nowrap",
    outlineOffset: "-.1875rem",
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    title: title,
    disabled: disabled,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: st
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: "1rem"
  }), children && /*#__PURE__*/React.createElement("span", null, children), iconEnd && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconEnd,
    size: "1rem"
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** SAP Horizon checkbox with optional label. */
function Checkbox({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled = false,
  id,
  style
}) {
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };
  const box = {
    width: "1.125rem",
    height: "1.125rem",
    flexShrink: 0,
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: `.0625rem solid ${on ? "var(--sapField_Focus_BorderColor)" : "var(--sapField_BorderColor)"}`,
    borderRadius: ".1875rem",
    background: "var(--sapField_Background)",
    color: "var(--sapField_Focus_BorderColor)"
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    onClick: toggle,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: ".5rem",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      fontFamily: "var(--sapFontFamily)",
      fontSize: "var(--sapFontSize)",
      color: "var(--sapTextColor)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: box
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "accept",
    size: ".75rem"
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STATE_BORDER = {
  None: "var(--sapField_BorderColor)",
  Error: "var(--sapErrorBorderColor)",
  Warning: "var(--sapWarningBorderColor)",
  Success: "var(--sapSuccessBorderColor)",
  Information: "var(--sapInformationBorderColor)"
};
const STATE_MSG = {
  Error: "var(--sapNegativeTextColor)",
  Warning: "var(--sapCriticalTextColor)",
  Success: "var(--sapPositiveTextColor)",
  Information: "var(--sapInformativeTextColor)"
};

/** SAP Horizon text input field. */
function Input({
  value,
  defaultValue,
  onChange,
  placeholder,
  label,
  type = "text",
  valueState = "None",
  valueStateText,
  icon,
  disabled = false,
  readOnly = false,
  required = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const border = focus && valueState === "None" ? "var(--sapField_Focus_BorderColor)" : STATE_BORDER[valueState] || STATE_BORDER.None;
  const wrap = {
    display: "flex",
    alignItems: "center",
    gap: ".375rem",
    boxSizing: "border-box",
    height: "var(--sapElement_Height)",
    padding: "0 .625rem",
    background: "var(--sapField_Background)",
    border: `.0625rem solid ${border}`,
    borderRadius: "var(--sapField_BorderCornerRadius)",
    boxShadow: valueState !== "None" ? `inset 0 0 0 .0625rem ${STATE_BORDER[valueState]}` : "none",
    opacity: disabled ? 0.4 : 1,
    cursor: disabled ? "not-allowed" : "text"
  };
  const input = {
    flex: 1,
    minWidth: 0,
    border: "none",
    outline: "none",
    background: "transparent",
    fontFamily: "var(--sapFontFamily)",
    fontSize: "var(--sapFontSize)",
    color: "var(--sapField_TextColor)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: ".25rem",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontSize: "var(--sapFontSmallSize)",
      color: "var(--sapContent_LabelColor)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--sapNegativeColor)"
    }
  }, " *")), /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    readOnly: readOnly,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: input
  }, rest)), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: "1rem",
    color: "var(--sapContent_NonInteractiveIconColor)"
  })), valueStateText && valueState !== "None" && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--sapFontSmallSize)",
      color: STATE_MSG[valueState]
    }
  }, valueStateText));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** SAP Horizon dropdown select. `options`: array of {value,label} or strings. */
function Select({
  value,
  defaultValue,
  onChange,
  options = [],
  label,
  placeholder,
  disabled = false,
  valueState = "None",
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const opts = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  const border = focus ? "var(--sapField_Focus_BorderColor)" : "var(--sapField_BorderColor)";
  const wrap = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    height: "var(--sapElement_Height)",
    padding: "0 .625rem",
    background: "var(--sapField_Background)",
    border: `.0625rem solid ${border}`,
    borderRadius: "var(--sapField_BorderCornerRadius)",
    opacity: disabled ? 0.4 : 1
  };
  const select = {
    appearance: "none",
    WebkitAppearance: "none",
    border: "none",
    outline: "none",
    background: "transparent",
    flex: 1,
    minWidth: 0,
    paddingRight: "1.25rem",
    fontFamily: "var(--sapFontFamily)",
    fontSize: "var(--sapFontSize)",
    color: "var(--sapField_TextColor)",
    cursor: disabled ? "not-allowed" : "pointer"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: ".25rem",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontSize: "var(--sapFontSmallSize)",
      color: "var(--sapContent_LabelColor)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: select
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "slim-arrow-down",
    size: ".875rem",
    color: "var(--sapContent_IconColor)",
    style: {
      position: "absolute",
      right: ".625rem",
      pointerEvents: "none"
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ShellBar.jsx
try { (() => {
/** SAP Horizon ShellBar — the global top application bar. */
function ShellBar({
  title,
  secondaryTitle,
  logo,
  showSearch = true,
  searchPlaceholder = "Search",
  actions = [],
  avatarInitials,
  onSearch,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      height: "2.75rem",
      padding: "0 1rem",
      background: "var(--sapShellColor,#fff)",
      boxShadow: "var(--sapShell_Shadow)",
      fontFamily: "var(--sapFontFamily)",
      color: "var(--sapShell_TextColor,#131e29)",
      boxSizing: "border-box",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: ".5rem",
      flexShrink: 0
    }
  }, logo && /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "",
    style: {
      height: "1.375rem",
      display: "block"
    }
  }), title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: "1rem"
    }
  }, title), secondaryTitle && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--sapContent_LabelColor)",
      fontSize: ".875rem"
    }
  }, secondaryTitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), showSearch && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: ".375rem",
      maxWidth: "20rem",
      flex: "0 1 20rem",
      height: "1.75rem",
      padding: "0 .5rem",
      background: "var(--sapField_Background)",
      border: ".0625rem solid var(--sapField_BorderColor)",
      borderRadius: "var(--sapField_BorderCornerRadius)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: "1rem",
    color: "var(--sapContent_NonInteractiveIconColor)"
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: searchPlaceholder,
    onChange: onSearch,
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--sapFontFamily)",
      fontSize: ".875rem",
      color: "var(--sapField_TextColor)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: ".25rem",
      flexShrink: 0
    }
  }, actions.map((a, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    title: a.title,
    onClick: a.onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "2.25rem",
      height: "2.25rem",
      border: "none",
      background: "transparent",
      borderRadius: "var(--sapButton_BorderCornerRadius)",
      cursor: "pointer",
      color: "var(--sapContent_IconColor)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: a.icon,
    size: "1.125rem"
  }))), avatarInitials && /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    initials: avatarInitials,
    size: "S",
    colorScheme: 6,
    style: {
      marginLeft: ".25rem"
    }
  })));
}
Object.assign(__ds_scope, { ShellBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ShellBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sample-management/App.jsx
try { (() => {
const DS = window.SAPHorizonDesignSystem_f0bcbb;
const {
  ShellBar,
  Button,
  Input,
  Select,
  Checkbox,
  Icon,
  Card,
  ObjectStatus,
  Badge,
  MessageStrip,
  Dialog,
  Avatar
} = DS;
const STATUS_STATE = {
  Delivered: "Positive",
  "In Progress": "Information",
  Open: "Neutral",
  Overdue: "Critical"
};

// ---- Side navigation rail (SAP shell) ----
function NavRail({
  current
}) {
  const items = [{
    icon: "home",
    label: "Home"
  }, {
    icon: "sales-order",
    label: "Samples",
    key: "samples"
  }, {
    icon: "customer",
    label: "Accounts"
  }, {
    icon: "product",
    label: "Products"
  }, {
    icon: "activity-items",
    label: "Cases"
  }, {
    icon: "bbyd-dashboard",
    label: "Analytics"
  }];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      width: 48,
      flexShrink: 0,
      background: "var(--sapShell_Background)",
      borderRight: "1px solid var(--sapShell_BorderColor)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: 8,
      gap: 4
    }
  }, items.map(it => {
    const active = it.key === current;
    return /*#__PURE__*/React.createElement("div", {
      key: it.label,
      title: it.label,
      style: {
        width: 40,
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        cursor: "pointer",
        position: "relative",
        color: active ? "var(--sapShell_Navigation_SelectedColor)" : "var(--sapContent_IconColor)",
        background: active ? "#fff" : "transparent"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: it.icon,
      size: "1.25rem"
    }), active && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: -4,
        top: 8,
        bottom: 8,
        width: 3,
        borderRadius: 2,
        background: "var(--sapShell_Navigation_SelectedColor)"
      }
    }));
  }));
}

// ---- KPI tiles ----
function Kpis({
  rows
}) {
  const total = rows.length;
  const overdue = rows.filter(r => r.status === "Overdue").length;
  const delivered = rows.filter(r => r.status === "Delivered").length;
  const cost = rows.reduce((s, r) => s + r.cost, 0);
  const tiles = [{
    label: "Total samples",
    value: total,
    sub: "in this workcenter"
  }, {
    label: "Delivered",
    value: delivered,
    sub: "completed",
    scheme: "Success"
  }, {
    label: "Overdue",
    value: overdue,
    sub: "need attention",
    scheme: "Error"
  }, {
    label: "Sample spend",
    value: cost.toLocaleString() + " €",
    sub: "across all currencies"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 16,
      marginBottom: 16
    }
  }, tiles.map(t => /*#__PURE__*/React.createElement(Card, {
    key: t.label,
    bodyStyle: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--sapContent_LabelColor)"
    }
  }, t.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--sapFontHeaderFamily)",
      fontWeight: 700,
      fontSize: 28,
      margin: "4px 0 2px",
      color: t.scheme === "Error" ? "var(--sapNegativeTextColor)" : t.scheme === "Success" ? "var(--sapPositiveTextColor)" : "var(--sapTitleColor)"
    }
  }, t.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--sapContent_LabelColor)"
    }
  }, t.sub))));
}

// ---- Dashboard (simple bar chart by account) ----
function Dashboard({
  rows
}) {
  const byAcct = {};
  rows.forEach(r => {
    byAcct[r.account] = (byAcct[r.account] || 0) + 1;
  });
  const max = Math.max(1, ...Object.values(byAcct));
  const palette = ["#0057d2", "#df1278", "#e76500", "#07838f", "#188918", "#7800a4"];
  return /*#__PURE__*/React.createElement(Card, {
    title: "Samples by account",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 24,
      height: 150,
      padding: "8px 4px 0"
    }
  }, Object.entries(byAcct).map(([acct, n], i) => /*#__PURE__*/React.createElement("div", {
    key: acct,
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      height: "100%",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "70%",
      maxWidth: 64,
      height: n / max * 100 + "%",
      background: palette[i % palette.length],
      borderRadius: "6px 6px 0 0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--sapContent_LabelColor)",
      textAlign: "center",
      lineHeight: 1.2
    }
  }, acct)))));
}

// ---- Create Sample dialog ----
function CreateSampleDialog({
  open,
  onClose,
  onCreate
}) {
  const [name, setName] = React.useState("");
  const [account, setAccount] = React.useState("Acme Chemicals");
  const [cost, setCost] = React.useState("");
  const [due, setDue] = React.useState("2026-09-01");
  const [hz, setHz] = React.useState(false);
  const [touched, setTouched] = React.useState(false);
  React.useEffect(() => {
    if (open) {
      setName("");
      setCost("");
      setHz(false);
      setTouched(false);
    }
  }, [open]);
  const invalid = !name.trim();
  const submit = () => {
    setTouched(true);
    if (invalid) return;
    onCreate({
      name: name.trim(),
      account,
      cost: Number(cost) || 0,
      due,
      hazardous: hz
    });
  };
  return /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    title: "Create Sample",
    onClose: onClose,
    width: "560px",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      design: "emphasized",
      onClick: submit
    }, "Create"), /*#__PURE__*/React.createElement(Button, {
      onClick: onClose
    }, "Cancel"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Sample name",
    placeholder: "e.g. Coating additive trial",
    required: true,
    value: name,
    onChange: e => setName(e.target.value),
    valueState: touched && invalid ? "Error" : "None",
    valueStateText: "Sample name is required"
  })), /*#__PURE__*/React.createElement(Select, {
    label: "Account",
    value: account,
    onChange: e => setAccount(e.target.value),
    options: ["Acme Chemicals", "Nordwind AG", "Bright Materials", "Baltic Build", "Meridian Labs"]
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Due date",
    value: due,
    onChange: e => setDue(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Cost (EUR)",
    placeholder: "0",
    value: cost,
    onChange: e => setCost(e.target.value),
    icon: "lead"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Status",
    options: ["Open", "In Progress", "Delivered"]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1",
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Contains hazardous material",
    checked: hz,
    onChange: setHz
  }))));
}

// ---- Sample list toolbar ----
function Toolbar({
  query,
  setQuery,
  showDash,
  setShowDash,
  onCreate,
  count
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--sapFontHeaderFamily)",
      fontWeight: 700,
      fontSize: 20,
      color: "var(--sapTitleColor)"
    }
  }, "Sample Management"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--sapContent_LabelColor)"
    }
  }, count, " samples")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 260
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "Search samples\u2026",
    value: query,
    onChange: e => setQuery(e.target.value)
  })), /*#__PURE__*/React.createElement(Button, {
    design: showDash ? "emphasized" : "transparent",
    icon: "bbyd-dashboard",
    onClick: () => setShowDash(!showDash),
    title: "Toggle dashboard"
  }), /*#__PURE__*/React.createElement(Button, {
    design: "transparent",
    icon: "action-settings",
    title: "Configure columns"
  }), /*#__PURE__*/React.createElement(Button, {
    design: "emphasized",
    icon: "add",
    onClick: onCreate
  }, "Create Sample"));
}

// ---- Table ----
function SampleTable({
  rows,
  onDelete
}) {
  const [sortKey, setSortKey] = React.useState(null);
  const [dir, setDir] = React.useState("asc");
  const sorted = React.useMemo(() => {
    if (!sortKey) return rows;
    const s = [...rows].sort((a, b) => a[sortKey] > b[sortKey] ? 1 : -1);
    return dir === "asc" ? s : s.reverse();
  }, [rows, sortKey, dir]);
  const sort = k => {
    if (sortKey === k) setDir(dir === "asc" ? "desc" : "asc");else {
      setSortKey(k);
      setDir("asc");
    }
  };
  const cols = [{
    k: "name",
    label: "Sample Name"
  }, {
    k: "status",
    label: "Status"
  }, {
    k: "due",
    label: "Due Date"
  }, {
    k: "cost",
    label: "Cost"
  }, {
    k: "account",
    label: "Account"
  }, {
    k: "product",
    label: "Product"
  }, {
    k: "employee",
    label: "Employee"
  }, {
    k: "qty",
    label: "Qty"
  }];
  const th = {
    padding: "10px 14px",
    textAlign: "left",
    fontWeight: 600,
    color: "var(--sapTextColor)",
    whiteSpace: "nowrap",
    cursor: "pointer",
    userSelect: "none",
    borderBottom: "2px solid var(--sapList_BorderColor)"
  };
  const td = {
    padding: "10px 14px",
    color: "var(--sapTextColor)",
    verticalAlign: "middle",
    borderBottom: "1px solid var(--sapList_BorderColor)"
  };
  return /*#__PURE__*/React.createElement(Card, {
    bodyStyle: {
      padding: 0
    },
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("thead", {
    style: {
      background: "var(--sapBackgroundColor)"
    }
  }, /*#__PURE__*/React.createElement("tr", null, cols.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.k,
    style: th,
    onClick: () => sort(c.k)
  }, c.label, " ", sortKey === c.k ? /*#__PURE__*/React.createElement(Icon, {
    name: dir === "asc" ? "sort-ascending" : "sort-descending",
    size: ".75rem"
  }) : /*#__PURE__*/React.createElement(Icon, {
    name: "sort",
    size: ".75rem",
    color: "var(--sapContent_NonInteractiveIconColor)"
  }))), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      cursor: "default",
      textAlign: "right"
    }
  }, "Actions"))), /*#__PURE__*/React.createElement("tbody", null, sorted.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.id,
    style: {
      transition: "background .15s"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--sapHoverColor)",
    onMouseLeave: e => e.currentTarget.style.background = "transparent"
  }, /*#__PURE__*/React.createElement("td", {
    style: td
  }, /*#__PURE__*/React.createElement("a", {
    href: "javascript:void(0)",
    style: {
      color: "var(--sapLinkColor)",
      textDecoration: "none",
      fontWeight: 600
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--sapContent_LabelColor)"
    }
  }, r.id, r.hazardous && " · hazardous")), /*#__PURE__*/React.createElement("td", {
    style: td
  }, /*#__PURE__*/React.createElement(ObjectStatus, {
    state: STATUS_STATE[r.status]
  }, r.status)), /*#__PURE__*/React.createElement("td", {
    style: td
  }, r.due), /*#__PURE__*/React.createElement("td", {
    style: td
  }, r.cost, " ", r.cur), /*#__PURE__*/React.createElement("td", {
    style: td
  }, /*#__PURE__*/React.createElement("a", {
    href: "javascript:void(0)",
    style: {
      color: "var(--sapLinkColor)",
      textDecoration: "none"
    }
  }, r.account)), /*#__PURE__*/React.createElement("td", {
    style: td
  }, r.product), /*#__PURE__*/React.createElement("td", {
    style: td
  }, r.employee), /*#__PURE__*/React.createElement("td", {
    style: td
  }, r.qty), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      textAlign: "right",
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    design: "transparent",
    icon: "edit",
    title: "Edit"
  }), /*#__PURE__*/React.createElement(Button, {
    design: "transparent",
    icon: "delete",
    title: "Delete",
    onClick: () => onDelete(r.id)
  }))))))));
}

// ---- App ----
function App() {
  const [rows, setRows] = React.useState(window.SAMPLE_DATA);
  const [query, setQuery] = React.useState("");
  const [showDash, setShowDash] = React.useState(false);
  const [dialog, setDialog] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  const filtered = rows.filter(r => (r.name + r.account + r.product + r.status + r.employee).toLowerCase().includes(query.toLowerCase()));
  const create = data => {
    const id = "SR-" + (1050 + rows.length);
    setRows([{
      id,
      cur: "EUR",
      product: "—",
      employee: "J. Limbach",
      qty: 1,
      status: "Open",
      ...data
    }, ...rows]);
    setDialog(false);
    setToast("Sample “" + data.name + "” created.");
    setTimeout(() => setToast(null), 3500);
  };
  const del = id => setRows(rows.filter(r => r.id !== id));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      background: "var(--sapBackgroundColor)"
    }
  }, /*#__PURE__*/React.createElement(ShellBar, {
    title: "Sales Cloud",
    secondaryTitle: "Sample Management",
    actions: [{
      icon: "sys-help",
      title: "Help"
    }, {
      icon: "bell",
      title: "Notifications"
    }, {
      icon: "grid",
      title: "App Finder"
    }],
    avatarInitials: "JL"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(NavRail, {
    current: "samples"
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflow: "auto",
      padding: 24
    }
  }, toast && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(MessageStrip, {
    design: "Success",
    onClose: () => setToast(null)
  }, toast)), /*#__PURE__*/React.createElement(Toolbar, {
    query: query,
    setQuery: setQuery,
    showDash: showDash,
    setShowDash: setShowDash,
    onCreate: () => setDialog(true),
    count: filtered.length
  }), /*#__PURE__*/React.createElement(Kpis, {
    rows: filtered
  }), showDash && /*#__PURE__*/React.createElement(Dashboard, {
    rows: filtered
  }), /*#__PURE__*/React.createElement(SampleTable, {
    rows: filtered,
    onDelete: del
  }))), /*#__PURE__*/React.createElement(CreateSampleDialog, {
    open: dialog,
    onClose: () => setDialog(false),
    onCreate: create
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sample-management/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sample-management/data.js
try { (() => {
// Mock data for the Sample Management workcenter (SAP Sales & Service Cloud V2 custom object).
window.SAMPLE_DATA = [{
  id: "SR-1042",
  name: "Coating additive trial",
  status: "Delivered",
  due: "2026-08-12",
  cost: 240,
  cur: "EUR",
  account: "Acme Chemicals",
  product: "PolyCoat X20",
  employee: "J. Limbach",
  hazardous: false,
  qty: 5
}, {
  id: "SR-1043",
  name: "Adhesive strength batch",
  status: "In Progress",
  due: "2026-07-28",
  cost: 120,
  cur: "EUR",
  account: "Nordwind AG",
  product: "BondFlex 4",
  employee: "A. Klein",
  hazardous: true,
  qty: 12
}, {
  id: "SR-1044",
  name: "Pigment dispersion set",
  status: "Overdue",
  due: "2026-06-30",
  cost: 480,
  cur: "USD",
  account: "Bright Materials",
  product: "ChromaMix 7",
  employee: "S. Ito",
  hazardous: false,
  qty: 3
}, {
  id: "SR-1045",
  name: "Sealant field sample",
  status: "Open",
  due: "2026-09-04",
  cost: 90,
  cur: "EUR",
  account: "Baltic Build",
  product: "SealPro 2",
  employee: "M. Rossi",
  hazardous: false,
  qty: 8
}, {
  id: "SR-1046",
  name: "Resin cure evaluation",
  status: "Delivered",
  due: "2026-08-01",
  cost: 310,
  cur: "EUR",
  account: "Acme Chemicals",
  product: "EpoSet 9",
  employee: "J. Limbach",
  hazardous: true,
  qty: 6
}, {
  id: "SR-1047",
  name: "Solvent compatibility",
  status: "In Progress",
  due: "2026-08-19",
  cost: 150,
  cur: "USD",
  account: "Meridian Labs",
  product: "SolvClear",
  employee: "A. Klein",
  hazardous: false,
  qty: 4
}, {
  id: "SR-1048",
  name: "UV stabiliser trial",
  status: "Open",
  due: "2026-09-15",
  cost: 200,
  cur: "EUR",
  account: "Nordwind AG",
  product: "StabiUV 3",
  employee: "S. Ito",
  hazardous: false,
  qty: 10
}, {
  id: "SR-1049",
  name: "Filler loading study",
  status: "Overdue",
  due: "2026-06-22",
  cost: 60,
  cur: "EUR",
  account: "Bright Materials",
  product: "FillMax 1",
  employee: "M. Rossi",
  hazardous: false,
  qty: 15
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sample-management/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ObjectStatus = __ds_scope.ObjectStatus;

__ds_ns.Token = __ds_scope.Token;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.MessageStrip = __ds_scope.MessageStrip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.SAP_ICON_GLYPHS = __ds_scope.SAP_ICON_GLYPHS;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ShellBar = __ds_scope.ShellBar;

})();
