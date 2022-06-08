import { useRouter } from "next/router";
import { GrLanguage } from "react-icons/gr";
import { Select } from "@chakra-ui/react";

export default function LocaleSwitcher() {
  let router = useRouter();
  let { pathname, query, asPath, locale } = router;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push({ pathname, query }, asPath, { locale });
  };

  return (
    <>
      <Select
        icon={<GrLanguage />}
        defaultValue={locale}
        onChange={changeLanguage}
      >
        <option value="en">English</option>
        <option value="fa">فارسی</option>
        <option value="de">Deutsch</option>
        <option value="fr">Français</option>
      </Select>

      {/* <ul icon={<GrLanguage />}>
        {router.locales.map((locale) => (
          <li key={locale}>
            <Link href={router.asPath} locale={locale}>
              <a>{locale}</a>
            </Link>
          </li>
        ))}
      </ul> */}
    </>
  );
}
