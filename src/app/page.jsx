import { HomeComp } from "@/components/home";

export const metadata = {
  icons: {
    icon: '/icon.ico'
  },
  title: 'Sailesh Rangwani',
  description: `Hi, I'm Sailesh Rangwani, a passionate Full Stack Developer, Backend Engineer & Deployment Specialist.`
}

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HomeComp />
    </div>
  );
}
