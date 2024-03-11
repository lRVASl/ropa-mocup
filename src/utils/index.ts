import dayjs from "dayjs";
import "dayjs/locale/th";
import thTH from "antd/lib/locale-provider/th_TH";
import "antd/es/date-picker/style";
var buddhistEra = require("dayjs/plugin/buddhistEra");
dayjs.extend(buddhistEra);
dayjs.locale("th");

export const configuredLocale: any = {
  ...thTH,
  DatePicker: {
    ...thTH.DatePicker,
    yearFormat: "BBBB",
    lang: {
      ...thTH.DatePicker?.lang,
      yearFormat: "BBBB",
    },
  },
};
