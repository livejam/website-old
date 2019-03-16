import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Privacy = ({ classes }) => (
  <Layout>
    <SEO title="Datenschutz" keywords={[`live`, `jam`, `sessions`]} />
    <Grid container justify="center" alignItems="center">
      <Grid item xs={9} className={classes.text}>
        <Typography variant="h2">Datenschutzerklärung</Typography>
        <Typography variant="h4">1. Datenschutz auf einen Blick</Typography>
        <Typography variant="h5">Allgemeine Hinweise</Typography>
        <Typography paragraph>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was
          mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website
          besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
          persönlich identifiziert werden können. Ausführliche Informationen zum
          Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
          Datenschutzerklärung.
        </Typography>
        <Typography variant="h5">Datenerfassung auf unserer Website</Typography>
        <Typography paragraph>
          Wer ist verantwortlich für die Datenerfassung auf dieser Website? Die
          Datenverarbeitung auf dieser Website erfolgt durch den
          Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser
          Website entnehmen.
        </Typography>
        <Typography variant="h5">Wie erfassen wir Ihre Daten?</Typography>
        <Typography paragraph>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
          mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein
          Kontaktformular eingeben. Andere Daten werden automatisch beim Besuch
          der Website durch unsere IT-Systeme erfasst. Das sind vor allem
          technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit
          des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch,
          sobald Sie unsere Website betreten.
        </Typography>
        <Typography variant="h5">Wofür nutzen wir Ihre Daten?</Typography>
        <Typography paragraph>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
          der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
          Nutzerverhaltens verwendet werden.
        </Typography>
        <Typography variant="h5">
          Welche Rechte haben Sie bezüglich Ihrer Daten?
        </Typography>
        <Typography paragraph>
          Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft,
          Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
          erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung
          oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren
          Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im
          Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen
          ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Außerdem
          haben Sie das Recht, unter bestimmten Umständen die Einschränkung der
          Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Details
          hierzu entnehmen Sie der Datenschutzerklärung unter „Recht auf
          Einschränkung der Verarbeitung“.
        </Typography>
        <Typography variant="h5">
          Analyse-Tools und Tools von Drittanbietern
        </Typography>
        <Typography paragraph>
          Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch
          ausgewertet werden. Das geschieht vor allem mit Cookies und mit
          sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens
          erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen
          zurückverfolgt werden. Sie können dieser Analyse widersprechen oder
          sie durch die Nichtbenutzung bestimmter Tools verhindern. Detaillierte
          Informationen zu diesen Tools und über Ihre Widerspruchsmöglichkeiten
          finden Sie in der folgenden Datenschutzerklärung.
        </Typography>
        <Typography variant="h4">
          Allgemeine Hinweise und Pflichtinformationen
        </Typography>
        <Typography variant="h5">Datenschutz</Typography>
        <Typography paragraph>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
          sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
          entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung. Wenn Sie diese Website benutzen, werden
          verschiedene personenbezogene Daten erhoben. Personenbezogene Daten
          sind Daten, mit denen Sie persönlich identifiziert werden können. Die
          vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben
          und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck
          das geschieht. Wir weisen darauf hin, dass die Datenübertragung im
          Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken
          aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch
          Dritte ist nicht möglich.
        </Typography>
        <Typography variant="h5">
          Hinweis zur verantwortlichen Stelle
        </Typography>
        <Typography paragraph>
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser
          Website ist:
          <br />
          Korfmann Consulting UG (haftungsbeschränkt)
          <br />
          Schlankreye 4<br />
          20144 Hamburg
          <br />
          Telefon: 04028468924
          <br />
          E-Mail: sebastian@korfmann.net
          <br />
          <br />
          Verantwortliche Stelle ist die natürliche oder juristische Person, die
          allein oder gemeinsam mit anderen über die Zwecke und Mittel der
          Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen
          o. Ä.) entscheidet.
        </Typography>
        <Typography variant="h5">
          Widerruf Ihrer Einwilligung zur Datenverarbeitung
        </Typography>
        <Typography paragraph>
          Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
          Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
          jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail
          an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
          Datenverarbeitung bleibt vom Widerruf unberührt.{" "}
        </Typography>
        <Typography variant="h5">
          Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie
          gegen Direktwerbung (Art. 21 DSGVO)
        </Typography>
        <Typography paragraph>
          Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder
          f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich
          aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer
          personenbezogenen Daten Widerspruch einzulegen; dies gilt auch für ein
          auf diese Bestimmungen gestütztes Profiling. Die jeweilige
          Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie
          dieser Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir
          Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es
          sei denn, wir können zwingende schutzwürdige Gründe für die
          Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten
          überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung
          oder Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs.
          1 DSGVO).
        </Typography>
        <Typography paragraph>
          Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu
          betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die
          Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke
          derartiger Werbung einzulegen; dies gilt auch für das Profiling,
          soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie
          widersprechen, werden Ihre personenbezogenen Daten anschließend nicht
          mehr zum Zwecke der Direktwerbung verwendet (Widerspruch nach Art. 21
          Abs. 2 DSGVO).
        </Typography>
        <Typography variant="h5">
          Beschwerderecht bei der zuständigen Aufsichtsbehörde
        </Typography>
        <Typography paragraph>
          Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
          Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
          Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
          oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht
          besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
          gerichtlicher Rechtsbehelfe.
        </Typography>
        <Typography variant="h5">Recht auf Datenübertragbarkeit</Typography>
        <Typography paragraph>
          Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
          oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich
          oder an einen Dritten in einem gängigen, maschinenlesbaren Format
          aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an
          einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es
          technisch machbar ist.{" "}
        </Typography>
        <Typography variant="h5">SSL- bzw. TLS-Verschlüsselung</Typography>
        <Typography paragraph>
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
          Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder
          Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw.
          TLSVerschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran,
          dass die Adresszeile des Browsers von „http://“ auf „https://“
          wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die
          SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie
          an uns übermitteln, nicht von Dritten mitgelesen werden.
        </Typography>
        <Typography variant="h5">
          Auskunft, Sperrung, Löschung und Berichtigung
        </Typography>
        <Typography paragraph>
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
          das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
          personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck
          der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung
          oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
          personenbezogene Daten können Sie sich jederzeit unter der im
          Impressum angegebenen Adresse an uns wenden.
        </Typography>
        <Typography variant="h5">
          Recht auf Einschränkung der Verarbeitung
        </Typography>
        <Typography paragraph>
          Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit
          unter der im Impressum angegebenen Adresse an uns wenden. Das Recht
          auf Einschränkung der Verarbeitung besteht in folgenden Fällen:
        </Typography>
        <ul>
          <li>
            Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
            personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit,
            um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das
            Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen
            Daten zu verlangen.
          </li>
          <li>
            Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig
            geschah/geschieht, können Sie statt der Löschung die Einschränkung
            der Datenverarbeitung verlangen.
          </li>
          <li>
            Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie
            jedoch zur Ausübung, Verteidigung oder Geltendmachung von
            Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung
            die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
            verlangen.
          </li>
          <li>
            Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
            haben, muss eine Abwägung zwischen Ihren und unseren Interessen
            vorgenommen werden. Solange noch nicht feststeht, wessen Interessen
            überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung
            Ihrer personenbezogenen Daten zu verlangen.
          </li>
        </ul>
        <Typography paragraph>
          Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt
          haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit
          Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung
          von Rechtsansprüchen oder zum Schutz der Rechte einer anderen
          natürlichen oder juristischen Person oder aus Gründen eines wichtigen
          öffentlichen Interesses der Europäischen Union oder eines
          Mitgliedstaats verarbeitet werden.
        </Typography>
        <Typography variant="h4">
          3. Datenerfassung auf unserer Website
        </Typography>
        <Typography variant="h5">Cookies</Typography>
        <Typography paragraph>
          Die Internetseiten verwenden teilweise so genannte Cookies. Cookies
          richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren.
          Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und
          sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem
          Rechner abgelegt werden und die Ihr Browser speichert.
        </Typography>
        <Typography paragraph>
          Die meisten der von uns verwendeten Cookies sind so genannte
          „Session-Cookies“. Sie werden nach Ende Ihres Besuchs automatisch
          gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis
          Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser
          beim nächsten Besuch wiederzuerkennen.
        </Typography>
        <Typography paragraph>
          Sie können Ihren Browser so einstellen, dass Sie über das Setzen von
          Cookies informiert werden und Cookies nur im Einzelfall erlauben, die
          Annahme von Cookies für bestimmte Fälle oder generell ausschließen
          sowie das automatische Löschen der Cookies beim Schließen des Browser
          aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität
          dieser Website eingeschränkt sein.
        </Typography>
        <Typography paragraph>
          Cookies, die zur Durchführung des elektronischen
          Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen
          erwünschter Funktionen (z. B. Warenkorbfunktion) erforderlich sind,
          werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Der
          Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von
          Cookies zur technisch fehlerfreien und optimierten Bereitstellung
          seiner Dienste. Soweit andere Cookies (z. B. Cookies zur Analyse Ihres
          Surfverhaltens) gespeichert werden, werden diese in dieser
          Datenschutzerklärung gesondert behandelt.
        </Typography>
        <Typography variant="h5">Server-Log-Dateien</Typography>{" "}
        <Typography paragraph>
          Der Provider der Seiten erhebt und speichert automatisch Informationen
          in so genannten Server-LogDateien, die Ihr Browser automatisch an uns
          übermittelt. Dies sind:
        </Typography>
        <ul>
          <li>Browsertyp und Browserversion</li>
          <li>verwendetes Betriebssystem</li>
          <li>Referrer URL</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>Uhrzeit der Serveranfrage</li>
          <li>IP-Adresse</li>
        </ul>
        <Typography paragraph>
          Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
          vorgenommen.
        </Typography>
        <Typography paragraph>
          Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
          lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an
          der technisch fehlerfreien Darstellung und der Optimierung seiner
          Website – hierzu müssen die Server-Log-Files erfasst werden.
        </Typography>
        <Typography variant="h5">Kontaktformular</Typography>
        <Typography paragraph>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
          Angaben aus dem Anfrageformular inklusive der von Ihnen dort
          angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
          Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
          nicht ohne Ihre Einwilligung weiter.
        </Typography>
        <Typography paragraph>
          Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt
          somit ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1
          lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen.
          Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die
          Rechtmäßigkeit der bis zum Widerruf erfolgten
          Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
        </Typography>
        <Typography paragraph>
          Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei
          uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
          Speicherung widerrufen oder der Zweck für die Datenspeicherung
          entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage).
          Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen
          – bleiben unberührt.
        </Typography>
        <Typography variant="h4">4. Analyse-Tools und Werbung</Typography>
        <Typography variant="h5">Google Analytics</Typography>
        <Typography paragraph>
          Diese Website nutzt Funktionen des Webanalysedienstes Google
          Analytics. Anbieter ist die Google Ireland Limited („Google“), Gordon
          House, Barrow Street, Dublin 4, Irland.
        </Typography>
        <Typography paragraph>
          Google Analytics verwendet so genannte „Cookies“. Das sind
          Textdateien, die auf Ihrem Computer gespeichert werden und die eine
          Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den
          Cookie erzeugten Informationen über Ihre Benutzung dieser Website
          werden in der Regel an einen Server von Google in den USA übertragen
          und dort gespeichert.
        </Typography>
        <Typography paragraph>
          Die Speicherung von Google-Analytics-Cookies und die Nutzung dieses
          Analyse-Tools erfolgen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
          Der Websitebetreiber hat ein berechtigtes Interesse an der Analyse des
          Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu
          optimieren.
        </Typography>
        <Typography variant="h6">IP Anonymisierung</Typography>
        <Typography paragraph>
          Wir haben auf dieser Website die Funktion IP-Anonymisierung aktiviert.
          Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten
          der Europäischen Union oder in anderen Vertragsstaaten des Abkommens
          über den Europäischen Wirtschaftsraum vor der Übermittlung in die USA
          gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen
          Server von Google in den USA übertragen und dort gekürzt. Im Auftrag
          des Betreibers dieser Website wird Google diese Informationen
          benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die
          Websiteaktivitäten zusammenzustellen und um weitere mit der
          Websitenutzung und der Internetnutzung verbundene Dienstleistungen
          gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google
          Analytics von Ihrem Browser übermittelte IPAdresse wird nicht mit
          anderen Daten von Google zusammengeführt.
        </Typography>
        <Typography variant="h6">Browser Plugin</Typography>
        <Typography paragraph>
          Sie können die Speicherung der Cookies durch eine entsprechende
          Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch
          darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche
          Funktionen dieser Website vollumfänglich werden nutzen können. Sie
          können darüber hinaus die Erfassung der durch den Cookie erzeugten und
          auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse)
          an Google sowie die Verarbeitung dieser Daten durch Google verhindern,
          indem Sie das unter dem folgenden Link verfügbare Browser-Plugin
          herunterladen und installieren:
          https://tools.google.com/dlpage/gaoptout?hl=de.
        </Typography>
        <Typography variant="h6">Widerspruch gegen Datenerfassung</Typography>
        <Typography paragraph>
          Sie können die Erfassung Ihrer Daten durch Google Analytics
          verhindern, indem Sie auf folgenden Link klicken. Es wird ein
          Opt-Out-Cookie gesetzt, der die Erfassung Ihrer Daten bei zukünftigen
          Besuchen dieser Website verhindert: Google Analytics deaktivieren.
        </Typography>
        <Typography paragraph>
          Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics
          finden Sie in der Datenschutzerklärung von Google:
          https://support.google.com/analytics/answer/6004245?hl=de.
        </Typography>
        <Typography variant="h6">Auftragsverarbeitung</Typography>
        <Typography paragraph>
          Wir haben mit Google einen Vertrag zur Auftragsverarbeitung
          abgeschlossen und setzen die strengen Vorgaben der deutschen
          Datenschutzbehörden bei der Nutzung von Google Analytics vollständig
          um.
        </Typography>
        <Typography variant="h6">
          Demografische Merkmale bei Google Analytics
        </Typography>
        <Typography paragraph>
          Diese Website nutzt die Funktion „demografische Merkmale“ von Google
          Analytics. Dadurch können Berichte erstellt werden, die Aussagen zu
          Alter, Geschlecht und Interessen der Seitenbesucher enthalten. Diese
          Daten stammen aus interessenbezogener Werbung von Google sowie aus
          Besucherdaten von Drittanbietern. Diese Daten können keiner bestimmten
          Person zugeordnet werden. Sie können diese Funktion jederzeit über die
          Anzeigeneinstellungen in Ihrem Google-Konto deaktivieren oder die
          Erfassung Ihrer Daten durch Google Analytics wie im Punkt „Widerspruch
          gegen Datenerfassung“ dargestellt generell untersagen.
        </Typography>
        <Typography variant="h6">Speicherdauer</Typography>
        <Typography paragraph>
          Bei Google gespeicherte Daten auf Nutzer- und Ereignisebene, die mit
          Cookies, Nutzerkennungen (z. B. User ID) oder Werbe-IDs (z. B.
          DoubleClick-Cookies, Android-Werbe-ID) verknüpft sind, werden nach 14
          Monaten anonymisiert bzw. gelöscht. Details hierzu ersehen Sie unter
          folgendem Link:
          https://support.google.com/analytics/answer/7667196?hl=de
        </Typography>
      </Grid>
    </Grid>
  </Layout>
);

const styles = theme => ({
  text: {
    "& h4": {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    "& p": {
      marginBottom: theme.spacing(2)
    }
  }
});

export default withStyles(styles)(Privacy);
