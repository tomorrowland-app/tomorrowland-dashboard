import dynamic from "next/dynamic";

const LeafletMapClient = dynamic(() => import("./LeafletMapClient"), {
  ssr: false,
});

export default function LeafletMap(props) {
  return <LeafletMapClient {...props} />;
}