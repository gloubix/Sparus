import Footer from "components/Footer";
import { PluginSlot } from "utils/usePlugins";

function Index() {
  return (
    <>
      <PluginSlot position="body" />
      <Footer />
      <PluginSlot position="footer" />
    </>
  );
}

export default Index;
