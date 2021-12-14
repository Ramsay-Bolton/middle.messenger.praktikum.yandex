import IPageProps from "../../interfaces/IPageProps";

export default interface IProfileProps extends IPageProps {
  avatarImage: string;
  sidebarLogoImage: string;
  sidebarBackImage: string;
  avatarImageChange: string;
}
