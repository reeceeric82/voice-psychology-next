import { 
	Box, 
	Heading, 
	Link, 
	UnorderedList, 
	ListItem, 
	Stack, 
	StackDivider, 
	Text,
    Center,
    OrderedList,
} from "@chakra-ui/react"; 
import Layout from "@/components/Layout";

const Datenschutz = () => {
	const title = "Voice | Datenschutz";
	return (
		<Layout title={title}>
			<Stack 
				as={Box}
				textAlign={'center'}
				spacing={{ base: 8, md: 14 }}
				py={{ base: 20, md: 6 }}>
				<StackDivider />
				<Heading>Datenschutzerklarung & Impressum</Heading>

				<Center textAlign={'left'}>
					<OrderedList>
						<ListItem 
							fontSize={'lg'}
							p={1}>
							<Link href="#datenschutz-auf-einen-blick">Datenschutz auf einen Blick</Link>
						</ListItem>

						<ListItem 
							fontSize={'lg'}
							p={1}>
							<Link href="#allgemeine-hinweise-und-pflichtinformationen">Allgemeine Hinweise und Pflichtinformation</Link>
						</ListItem>

						<ListItem 
							fontSize={'lg'}
							p={1}>
							<Link href="#datenerfassung-auf-unserer-website">Datenerfassung auf unserer Website</Link>
						</ListItem>
					</OrderedList>
				</Center>

				<StackDivider />
				{/* Section 1 */}
				<Stack textAlign={'left'}>
					<Stack spacing={6}>
						<Stack divider={<StackDivider />}id="datenschutz-auf-einen-blick">
							<Text as={'b'} fontSize={'3xl'}>1. Datenschutz auf einen Blick</Text>
							<Text as={'b'} fontSize={'2xl'}>1.1 Allgemeine Hinweise</Text>
						</Stack>
						<Text fontSize={'xl'}>
							Die folgenden Hinweise geben einen einfachen &#220;berblick dar&#252;ber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. 
							Personenbezogene Daten sind alle Daten, mit denen Sie pers&#246;nlich identifiziert werden k&#246;nnen. 
							Ausf&#252;hrliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgef&#252;hrten Datenschutzerkl&#228;rung.
						</Text>

							<Text as={'b'} fontSize={'2xl'}>1.2 Datenerfassung auf unserer Website</Text>
							<Text as={'b'} fontSize={'xl'}>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</Text>
							<Text fontSize={'xl'}>
								Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
								Dessen Kontaktdaten k&#246;nnen Sie dem Impressum dieser Website entnehmen. 
							</Text>
							<Text as={'b'} fontSize={'xl'}>Wie erfassen wir Ihre Daten?</Text>
							<Text fontSize={'xl'}>
								Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
								Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. 
								Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. 
								Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). 
								Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.
							</Text>
							<Text as={'b'} fontSize={'xl'}>Welche Rechte haben Sie bez&#252;glich Ihrer Daten?</Text>
							<Text fontSize={'xl'}>
								Sie haben jederzeit das Recht unentgeltlich Auskunft &#252;ber Herkunft, Empf&#228;nger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. 
								Sie haben au&#223;erdem ein Recht, die Berichtigung, Sperrung oder L&#246;schung dieser Daten zu verlangen. 
								Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k&#246;nnen Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. 
								Des Weiteren steht Ihnen ein Beschwerderecht bei der zust&#228;ndigen Aufsichtsbeh&#246;rde zu.
							</Text>

						<Text as={'b'} fontSize={'2xl'}>1.3 Analyse-Tools und Tools von Drittanbietern</Text>
						<Text fontSize={'xl'}>
							Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. 
							Das geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen. 
							Die Analyse Ihres Surf-Verhaltens erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen zur&#252;ckverfolgt werden. 
							Sie k&#246;nnen dieser Analyse widersprechen oder sie durch die Nichtbenutzung bestimmter Tools verhindern. 
							Detaillierte Informationen dazu finden Sie in der folgenden Datenschutzerkl&#228;rung. 
							Sie k&#246;nnen dieser Analyse widersprechen. 
							&#220;ber die Widerspruchsm&#246;glichkeiten werden wir Sie in dieser Datenschutzerkl&#228;rung informieren.

						</Text>
					</Stack>
					{/* End Section 1 */}
					<StackDivider />
					{/* Section 2 */}
					<Stack spacing={6}>
						<Stack divider={<StackDivider />} id="allgemeine-hinweise-und-pflichtinformationen">
							<Text as={'b'} fontSize={'3xl'}>2. Allgemeine Hinweise und Pflichtinformation</Text>
							<Text as={'b'} fontSize={'2xl'}>2.1 Datenschutz</Text>
						</Stack>
						<Text fontSize={'xl'}>
							Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers&#246;nlichen Daten sehr ernst. 
							Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerkl&#228;rung. 
							Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. 
							Personenbezogene Daten sind Daten, mit denen Sie pers&#246;nlich identifiziert werden k&#246;nnen. 
							Die vorliegende Datenschutzerkl&#228;rung erl&#228;utert, welche Daten wir erheben und wof&#252;r wir sie nutzen. 
							Sie erl&#228;utert auch, wie und zu welchem Zweck das geschieht. Wir weisen darauf hin, 
							dass die Daten&#252;bertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitsl&#252;cken aufweisen kann. 
							Ein l&#252;ckenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht m&#246;glich.
						</Text>

							<Text as={'b'} fontSize={'2xl'}>2.2 Hinweise zur veranrwortlichen Stelle</Text>
							<Text as={'b'} fontSize={'xl'}>Die veranrwortliche Stelle f&#252;r die Datenverarbeitung auf dieser Website ist:</Text>
							<Stack divider={<StackDivider />}>
								<Text fontSize={'xl'}>Carolin Paul</Text>
								<Text fontSize={'xl'}>Beusselstra&#223;e 32</Text>
								<Text fontSize={'xl'}>10553 Berlin</Text>
								<Text fontSize={'xl'}>Telefon: +49 160 96443032</Text>
								<Text fontSize={'xl'}>Email: <Link href="mailto:carolin@voicepsychology.de">carolin@voicepsychology.de</Link>
								</Text>
							</Stack>
							<Text fontSize={'xl'}>
								Verantwortliche Stelle ist die nat&#252;rliche oder juristische Person, 
								die allein oder gemeinsam mit anderen &#252;ber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. &#196;.) entscheidet.
							</Text>

							<Text as={'b'} fontSize={'2xl'}>2.3 Wilderruf Iher Einwilligung zur Datenverarbeitung</Text>
							<Text fontSize={'xl'}>
								Viele Datenverarbeitungsvorg&#228;nge sind nur mit Ihrer ausdr&#252;cklichen Einwilligung m&#246;glich. 
								Sie k&#246;nnen eine bereits erteilte Einwilligung jederzeit widerrufen. 
								Dazu reicht eine formlose Mitteilung per E-Mail an uns. 
								Die Rechtm&#228;&#223;igkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unber&#252;hrt.
							</Text>
								
						<Text as={'b'} fontSize={'2xl'}>2.4 Beschwerderecht bei der zust&#228;ndigen Aufsichtsbeh&#246;rde</Text>
						<Text fontSize={'xl'}>
							Im Falle datenschutzrechtlicher Verst&#246;&#223;e steht dem Betroffenen ein Beschwerderecht bei der zust&#228;ndigen Aufsichtsbeh&#246;rde zu. 
							Zust&#228;ndige Aufsichtsbeh&#246;rde in datenschutzrechtlichen Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem unser Unternehmen seinen Sitz hat. 
							Eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten finden Sie 
							<Link color="orange.200" href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" target="_blank" rel="noopener noreferer"> hier</Link>.
						</Text>

						<Text as={'b'} fontSize={'2xl'}>2.5 Recht auf Daten&#252;bertragbarkeit</Text>
						<Text fontSize={'xl'}>
							Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erf&#252;llung eines Vertrags automatisiert verarbeiten, 
							an sich oder an einen Dritten in einem g&#228;ngigen, maschinenlesbaren Format aush&#228;ndigen zu lassen. 
							Sofern Sie die direkte &#220;bertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
						</Text>

							<Text as={'b'} fontSize={'2xl'}>SSL - bzw. TLS-Verschulüsselung</Text>
							<Text fontSize={'xl'}>
								Diese Seite nutzt aus Sicherheitsgr&#252;nden und zum Schutz der &#220;bertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, 
								die Sie an uns als Seitenbetreiber senden, eine SSL-bzw. TLS-Verschl&#252;sselung. 
								Eine verschl&#252;sselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von “http://” auf “https://” wechselt und an dem Schloss-Symbol in 
								Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, k&#246;nnen die Daten, die Sie an uns &#252;bermitteln, nicht von Dritten mitgelesen werden.
							</Text>

						<Text as={'b'} fontSize={'2xl'}>2.7 Auskunft, Sperrung, L&#246;schung</Text>
						<Text fontSize={'xl'}>
							Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft &#252;ber Ihre gespeicherten personenbezogenen Daten, 
							deren Herkunft und Empf&#228;nger und den Zweck der Datenverarbeitung und ggf. 
							ein Recht auf Berichtigung, Sperrung oder L&#246;schung dieser Daten. 
							Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten k&#246;nnen Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
						</Text>
					</Stack>
					{/* End Section 2 */}
					<StackDivider />
					{/* Section 3 */}
					<Stack spacing={6}>
						<Stack divider={<StackDivider />} id="datenerfassung-auf-unserer-website">
							<Text as={'b'} fontSize={'3xl'}>3. Datenerfassung auf unserer Website</Text>
							<Text as={'b'} fontSize={'2xl'}>3.1 Cookies</Text>
						</Stack>
						<Text fontSize={'xl'}>
							Die Internetseiten verwenden teilweise so genannte Cookies. 
							Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, 
							effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.
						</Text>

							<Text fontSize={'xl'}>
								Die meisten der von uns verwendeten Cookies sind so genannte “Session-Cookies”. 
								Sie werden nach Ende Ihres Besuchs automatisch gel&#246;scht. 
								Andere Cookies bleiben auf Ihrem Endger&#228;t gespeichert bis Sie diese l&#246;schen. 
								Diese Cookies erm&#246;glichen es uns, Ihren Browser beim n&#228;chsten Besuch wiederzuerkennen.
							</Text>
							<Text fontSize={'xl'}>
								Sie k&#246;nnen Ihren Browser so einstellen, dass Sie &#252;ber das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, 
								die Annahme von Cookies f&#252;r bestimmte F&#338;lle oder generell ausschlie&#223;en sowie das automatische L&#246;schen der Cookies beim Schlie&#223;en des Browser aktivieren. 
								Bei der Deaktivierung von Cookies kann die Funktionalit&#228;t dieser Website eingeschr&#228;nkt sein.
							</Text>
							<Text fontSize={'xl'}>
								Cookies, die zur Durchf&#252;hrung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, 
								von Ihnen erw&#252;nschter Funktionen (z.B. Warenkorbfunktion) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. 
								Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. 
								Soweit andere Cookies (z.B. 
								Cookies zur Analyse Ihres Surfverhaltens) gespeichert werden, werden diese in dieser Datenschutzerkl&@228;rung gesondert behandelt.
							</Text>

							<Text as={'b'} fontSize={'2xl'}>3.2 Server-Log-Dateien</Text>
							<Text fontSize={'xl'}>
								Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns &#252;bermittelt. Dies sind:
							</Text>
							
							<UnorderedList pl={5}>
								<ListItem>
									<Text fontSize={'xl'}>Browsertyp und Browserversion</Text>
								</ListItem>
								<ListItem>
									<Text fontSize={'xl'}>verwendetes Betriebssystem</Text>
								</ListItem>
								<ListItem>
									<Text fontSize={'xl'}>Referrer URL</Text>
								</ListItem>
								<ListItem>
									<Text fontSize={'xl'}>Hostname des zugreifenden Rechners</Text>
								</ListItem>
								<ListItem>
									<Text fontSize={'xl'}>Uhrzeit der Serveranfrage</Text>
								</ListItem>
								<ListItem>
									<Text fontSize={'xl'}>IP-Adresse</Text>
								</ListItem>
							</UnorderedList>

							<Text fontSize={'xl'}>
								Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
							</Text>
							<Text fontSize={'xl'}>
								Grundlage f&#252;r die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO, der die Verarbeitung von Daten zur Erf&#252;llung eines Vertrags oder vorvertraglicher Ma&#223;nahmen gestattet.
							</Text>

							<Text as={'b'} fontSize={'2xl'}>3.3 Kontaktformular</Text>
							<Text fontSize={'xl'}>
								Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, 
								werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und f&#252;r den Fall von Anschlussfragen bei uns gespeichert. 
								Diese Daten geben wir nicht ohne Ihre Einwilligung weiter
							</Text>
							<Text fontSize={'xl'}>
								Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschlie&#223;lich auf 
								Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie k&#246;nnen diese Einwilligung jederzeit widerrufen. 
								Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtm&#228;&#223;igkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorg&#228;nge bleibt vom Widerruf unber&#252;hrt.
							</Text>
							<Text fontSize={'xl'}>
								Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, 
								bis Sie uns zur L&#246;schung auffordern, 
								Ihre Einwilligung zur Speicherung widerrufen oder der Zweck f&#252;r die Datenspeicherung entf&#228;llt 
								(z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage). 
								Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unber&#252;hrt.
							</Text>

							<Text as={'b'} fontSize={'2xl'}>3.4 Registrierung auf dieser Website (G&#228;stebuch)</Text>
							<Text fontSize={'xl'}>
								Sie k&#246;nnen sich auf unserer Website registrieren, um zus&#228;tzliche Funktionen auf der Seite zu nutzen. 
								Die dazu eingegebenen Daten verwenden wir nur zum Zwecke der Nutzung des jeweiligen Angebotes oder Dienstes, 
								f&#252;r den Sie sich registriert haben. Die bei der Registrierung abgefragten Pflichtangaben m&#252;ssen vollst&#228;ndig angegeben werden. 
								Anderenfalls werden wir die Registrierung ablehnen. 
								F&#252;r wichtige &#196;nderungen etwa beim Angebotsumfang oder bei technisch notwendigen &#196;nderungen nutzen wir die bei der Registrierung angegebene E-Mail-Adresse, 
								um Sie auf diesem Wege zu informieren.
							</Text>
							<Text fontSize={'xl'}>
								Die Verarbeitung der bei der Registrierung eingegebenen Daten erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). 
								Sie k&#246;nnen eine von Ihnen erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. 
								Die Rechtm&#228;&#223;igkeit der bereits erfolgten Datenverarbeitung bleibt vom Widerruf unber&#252;hrt. 
								Die bei der Registrierung erfassten Daten werden von uns gespeichert, solange Sie auf unserer Website registriert sind und werden anschlie&#223;end gel&#246;scht. 
								Gesetzliche Aufbewahrungsfristen bleiben unber&#252;hrt. 
							</Text>

							<Text as={'b'} fontSize={'2xl'}>3.5 Kommentarfunktion auf dieser Website (G&#228;stebuch)</Text>
							<Text fontSize={'xl'}>
								F&#252;r die Kommentarfunktion auf dieser Seite werden neben Ihrem Kommentar auch Angaben zum Zeitpunkt der Erstellung des Kommentars, 
								Ihre E-Mail-Adresse und, wenn Sie nicht anonym posten, der von Ihnen gew&#228;hlte Nutzername gespeichert.
							</Text>
							<Text as={'b'} fontSize={'xl'}>Speicherung der IP-Adresse</Text>
							<Text fontSize={'xl'}>
								Unsere Kommentarfunktion speichert die IP-Adressen der Nutzer, die Kommentare verfassen. 
								Da wir Kommentare auf unserer Seite nicht vor der Freischaltung pr&#252;fen, ben&#246;tigen wir diese Daten, 
								um im Falle von Rechtsverletzungen wie Beleidigungen oder Propaganda gegen den Verfasser vorgehen zu k&#246;nnen.
							</Text>
							<Text as={'b'} fontSize={'xl'}>Speicherdauer der Kommentare</Text>
							<Text fontSize={'xl'}>
								Die Kommentare und die damit verbundenen Daten (z.B. IP-Adresse) werden gespeichert und verbleiben auf unserer Website, 
								bis der kommentierte Inhalt vollst&#228;ndig gel&#246;scht wurde oder die Kommentare aus rechtlichen Gr&#252;nden gel&#246;scht werden m&#252;ssen (z.B. beleidigende Kommentare).
							</Text>							
							<Text as={'b'} fontSize={'xl'}>Rechtsgrundlag</Text>
							<Text fontSize={'xl'}>
								Die Speicherung der Kommentare erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). 
								Sie k&#246;nnen eine von Ihnen erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. 
								Die Rechtm&#228;&#223;igkeit der bereits erfolgten Datenverarbeitungsvorg&@228;nge bleibt vom Widerruf unber&#252;hrt.
							</Text>

							<Text as={'b'} fontSize={'2xl'}>3.6 Verarbeiten von Daten (Kunden- und Vertragsdaten)</Text>
							<Text fontSize={'xl'}>
								Wir erheben, verarbeiten und nutzen personenbezogene Daten nur, soweit sie f&#252;r die Begr&#252;ndung, 
								inhaltliche Ausgestaltung oder &#196;nderung des Rechtsverh&#228;ltnisses erforderlich sind (Bestandsdaten). 
								Dies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, 
								der die Verarbeitung von Daten zur Erf&#252;llung eines Vertrags oder vorvertraglicher Ma&#223;nahmen gestattet. 
								Personenbezogene Daten &#252;ber die Inanspruchnahme unserer Internetseiten (Nutzungsdaten) erheben, verarbeiten und nutzen wir nur, soweit dies erforderlich ist, 
								um dem Nutzer die Inanspruchnahme des Dienstes zu erm&#246;glichen oder abzurechnen.
							</Text>
							<Text fontSize={'xl'}>
								Die erhobenen Kundendaten werden nach Abschluss des Auftrags oder Beendigung der Gesch&#228;ftsbeziehung gel&#246;scht. 
								Gesetzliche Aufbewahrungsfristen bleiben unber&#252;hrt.
							</Text>
							
							<Text as={'b'} fontSize={'2xl'}>3.7 Datenübermittlung bei Vertragsschluss f&#252;r Online-Shops, H&#228;ndler und Warenversand</Text>
							<Text fontSize={'xl'}>
								Wir &#252;bermitteln personenbezogene Daten an Dritte nur dann, wenn dies im Rahmen der Vertragsabwicklung notwendig ist, 
								etwa an die mit der Lieferung der Ware betrauten Unternehmen oder das mit der Zahlungsabwicklung beauftragte Kreditinstitut. 
								Eine weitergehende &#220;bermittlung der Daten erfolgt nicht bzw. nur dann, wenn Sie der &#220;bermittlung ausdr&#252;cklich zugestimmt haben. 
								Eine Weitergabe Ihrer Daten an Dritte ohne ausdr&#252;ckliche Einwilligung, etwa zu Zwecken der Werbung, erfolgt nicht.
							</Text>
							<Text fontSize={'xl'}>
							Grundlage f&#252;r die Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erf&#252;llung eines Vertrags oder vorvertraglicher Ma&#223;nahmen gestattet.
							</Text>

						<Text as={'b'} fontSize={'2xl'}>3.8 Daten&#252;bermittlung bei Vertragsschluss f&#252;r Dienstleistungen und digitale Inhalte</Text>
						<Text fontSize={'xl'}>
							Wir &#252;bermitteln personenbezogene Daten an Dritte nur dann, wenn dies im Rahmen der Vertragsabwicklung notwendig ist, 
							etwa an das mit der Zahlungsabwicklung beauftragte Kreditinstitut. 
							Eine weitergehende &#220;bermittlung der Daten erfolgt nicht bzw. nur dann, 
							wenn Sie der &#220;bermittlung ausdr&#252;cklich zugestimmt haben. 
							Eine Weitergabe Ihrer Daten an Dritte ohne ausdr&#252;ckliche Einwilligung, etwa zu Zwecken der Werbung, erfolgt nicht. 
							Grundlage f&#252;r die Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, 
							der die Verarbeitung von Daten zur Erf&#252;llung eines Vertrags oder vorvertraglicher Ma&#223;nahmen gestattet.
						</Text>
					</Stack>
					{/* End Section 3 */}
				</Stack>
			</Stack>
		</Layout>
	)
}

export default Datenschutz;
