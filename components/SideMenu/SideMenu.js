import React from "react";
import { useRouter } from "next/router";
import SideMenu from "react-sidemenu";

function index({ topics }) {
  const router = useRouter();
  const tlist = topics.map((item) => ({
    icon: item.ess_metadata[0].topicByTopic.icon,
    label: item.ess_metadata[0].value,
    value: item.ess_metadata[0].value,
    children: [item.ess_metadata[0].topicByTopic.ess_metadata][0],
  }));

  tlist.push({ divider: true, label: "Extras", value: "appendix" });
  tlist.push({ label: "Methods", value: "methods" });
  tlist.push({ label: "About", value: "about" });
  return (
    <div>
      <SideMenu
        activeItem={"happy"}
        items={tlist}
        reverse={false}
        onMenuItemClick={(value) => router.push(`/reports/ess/${value}`)}
      />
    </div>
  );
}

export default index;
