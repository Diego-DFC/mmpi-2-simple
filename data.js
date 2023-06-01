/*
The original version of this file was taken from the MMPI-2 implementation
released by Kevin Timmerman under the GNU General Public License v3.0 in 2008.

Its contents are presumably copyrighted by the University of Minnesota and their
distribution rights owned by Pearson's Clinical Assessment Group.

It is herein used to the best of my conscience for a nonprofit, educational
purpose in the interest of the public.

As such, while the legal specifics of it may be questionable, it is incorporated
into this public domain work in good faith.
*/

questions=[
	// 0 - Description
	"MMPI-2 Preguntas",
	// 1
	"Me gustan las revistas de mecánica.",
	"Tengo buen apetito.",
	"Casi siempre me levanto por las mañanas descansado y como nuevo.",
	"Creo que me gustaría trabajar como bibliotecario.",
	"El ruido me despierta fácilmente.",
	"Mi padre es un buen hombre, (o lo fue en caso de haber fallecido).",
	"Me gusta leer artículos sobre crímenes en los periódicos.",
	"Normalmente tengo bastante calientes los pies y las manos.",
	"En mi vida diaria hay muchas cosas que me resultan interesantes.",
	"Actualmente, tengo tanta capacidad de trabajo como antes.",
	"La mayor parte del tiempo me parece tener un nudo en la garganta.",
	"Mi vida sexual es satisfactoria.",
	"La gente debería intentar comprender sus sueños y guiarse por ellos o tomarlos como avisos.",
	"Me divierten las historias de detectives y de misterio.",
	"Trabajo bajo una tensión muy grande.",
	"De vez en cuando pienso en cosas demasiado malas como para hablar de ellas.",
	"Estoy seguro de que la vida es dura para mí.",
	"Sufro ataques de náuseas y vómitos.",
	"Cuando acepto un nuevo empleo, me gusta descubrir a quien debo “caerle bien”.",
	"Muy rara vez sufro de constipación (sequedad de vientre).",
	"A veces he deseado muchísimo abandonar el hogar.",
	"Nadie parece comprenderme.",
	"A veces tengo accesos de risa y llanto que no puedo controlar.",
	"A veces estoy poseído por espíritus diabólicos.",
	"Me gustaría ser cantante.",
	"Cuando estoy en dificultades o problemas creo que lo mejor es callarme.",
	"Cuando alguien me hace algún daño, siento deseos de devolvérselo si me es posible, y esto, por cuestión de principios.",
	"Varias veces a la semana me molesta la acidez de estómago.",
	"A veces siento deseos de maldecir.",
	"A menudo tengo pesadillas.",
	"Me cuesta bastante concentrarme en una tarea o trabajo.",
	"He tenido muy peculiares y extrañas experiencias.",
	"Raras veces me preocupo por mi salud.",
	"Nunca me he visto en dificultades a causa de mi conducta sexual.",
	"Durante algún tiempo, cuando era joven, participé en pequeños robos.",
	"Tengo tos la mayor parte del tiempo.",
	"A veces siento deseos de romper cosas.",
	"He tenido períodos de días, semanas o meses en los que no podía preocuparme por las cosas, porque no tenía ánimo para nada.",
	"Mi sueño es irregular, inquieto.",
	"La mayor parte del tiempo parece dolerme la cabeza por todas partes.",
	"No digo siempre la verdad.",
	"Si los demás no se la hubieran tomado conmigo, hubiese tenido más éxito.",
	"Mis razonamientos son ahora mejores que nunca.",
	"Una vez a la semana, o más a menudo, siento calor por todo el cuerpo sin causa aparente.",
	"Tengo tan buena salud física como la mayor parte de mis amigos.",
	"Prefiero hacerme el desentendido con amigos del colegio, o personas conocidas que no veo desde hace tiempo, a menos que ellos me hablen primero.",
	"Casi nunca he sufrido de dolores en el pecho o en el corazón.",
	"En muchas ocasiones me gustaría más sentarme y soñar despierto que hacer cualquier cosa.",
	"Soy una persona sociable.",
	"A menudo he recibido órdenes de alguien que no sabía tanto como yo.",
	"No leo diariamente todos los artículos principales del diario.",
	"No he llevado un tipo de vida adecuado y normal.",
	"A menudo algunas partes de mi cuerpo tienen sensaciones de hormigueo, quemazón, picazón o bien de quedarse “dormidas”.",
	"A mi familia no le gusta el trabajo que he elegido (o el trabajo que pienso elegir para mi futuro).",
	"Algunas veces persisto en una cosa o tema hasta que los demás pierden la paciencia conmigo.",
	"Me gustaría ser tan feliz como parecen ser los otros.",
	"Muy raras veces siento dolor en la nuca.",
	"Pienso que una gran mayoría de gente exagera sus desgracias para lograr la simpatía y ayuda de los demás.",
	"Tengo molestias en la boca del estómago casi a diario.",
	"Cuando estoy con gente escucho cosas extrañas.",
	"Soy una persona importante.",
	"A menudo he deseado ser mujer (o si usted es mujer: nunca me ha molestado ser mujer).",
	"Mis sentimientos no son heridos con facilidad.",
	"Me gusta leer novelas de amor.",
	"La mayor parte del tiempo siento melancolía.",
	"Se viviría mejor sin leyes.",
	"Me gusta la poesía.",
	"A veces hago rabiar (jugando) a los animales.",
	"Creo que me gustaría el trabajo de guardabosques.",
	"En una discusión o debate, me dejo vencer fácilmente.",
	"En el momento actual me es difícil tener la esperanza de llegar a ser alguien.",
	"A veces mi alma abandona mi cuerpo.",
	"Decididamente no tengo confianza en mí mismo.",
	"Me gustaría ser florista.",
	"Normalmente siento que la vida vale la pena vivirla.",
	"Se necesita discutir mucho para con-vencer a la mayor parte de la gente de la verdad.",
	"De vez en cuando dejo para mañana lo que debería hacer hoy.",
	"Le agrado a la mayor parte de la gente que me conoce.",
	"No me importa que se diviertan haciéndome bromas.",
	"Me gustaría ser enfermero.",
	"Creo que la mayor parte de la gente mentiría para conseguir lo que busca.",
	"Hago muchas cosas de las que me arrepiento luego (me arrepiento de más cosas o con más frecuencia que otras personas).",
	"Tengo pocas peleas con las personas de mi familia.",
	"Siendo joven me echaron de clase, una o más veces, por portarme mal.",
	"A veces siento grandes deseos de hacer algo dañino o chocante.",
	"Me gustaría asistir a reuniones o fiestas donde haya mucha alegría y ruido.",
	"Me he encontrado con problemas tan llenos de posibilidades que no he podido llegar a una decisión.",
	"Creo que las mujeres deben tener tanta libertad sexual como los hombres.",
	"Las luchas más encarnizadas las tengo conmigo mismo.",
	"Yo quiero mucho a mi padre (o lo quise, si falleció).",
	"Tengo pocas o ninguna molestia a causa de espasmos o contracciones musculares.",
	"No parece importarme lo que me suceda.",
	"A veces, cuando no me siento bien, estoy irritable.",
	"La mayor parte del tiempo me parece haber hecho algo malo o equivocado.",
	"Soy feliz la mayor parte del tiempo.",
	"Veo a mi alrededor cosas, animales o personas que otros no ven.",
	"Parece como si la mayor parte del tiempo tuviera la cabeza cargada o llena de ruidos.",
	"Hay algunas personas tan mandonas que me dan ganas de hacer lo contrario de lo que quieren, aunque sepa que tienen razón.",
	"Alguien me la tiene jurada.",
	"Nunca he hecho algo peligroso solo por el placer de hacerlo.",
	"A menudo siento como si tuviera una venda puesta fuertemente alrededor de mi cabeza.",
	"Alguna vez me enojo.",
	"Me divierte mas un juego cuando yo apuesto.",
	"La mayoría de la gente es honrada por temor a ser descubierta.",
	"En el colegio, algunas veces, fui enviado al director a causa de mi mala conducta.",
	"Mi manera de hablar es como siempre (ni más rápida, ni más lenta, ni más atropellada, no tengo carraspera).",
	"Mis modales en la mesa no son tan correctos en mi casa como cuando salgo a comer afuera.",
	"Cualquier persona capacitada y dispuesta a trabajar fuerte, tiene muchas probabilidades de tener éxito.",
	"Me parece ser tan capaz y despierto como la mayor parte de los que me rodean.",
	"Para no perder un beneficio o ventaja, la mayoría de la gente está dispuesta a hacer cualquier cosa.",
	"Tengo bastantes trastornos digestivos.",
	"Me gustan el teatro y el cine.",
	"Sé quien es el responsable de muchos de mis problemas.",
	"A veces me siento tan atraído por las cosas de otros (zapatos, reloj), que tengo ganas de robarlas.",
	"Ver sangre no me da miedo ni me hace mal.",
	"Frecuentemente no puedo comprender porque he estado tan gruñón y mal-humorado.",
	"Nunca he vomitado sangre, ni sangrado al toser.",
	"No me preocupa contraer una enfer-medad.",
	"Me gusta recoger flores o cultivar plantas en casa.",
	"Frecuentemente encuentro necesario defender lo que es justo.",
	"Nunca me he entregado a prácticas sexuales fuera de lo común.",
	"A veces mi pensamiento ha ido más rápido y delante de mis palabras.",
	"Si pudiera entrar en un espectáculo sin pagar y estuviera seguro de no ser visto, probablemente lo haría.",
	"Generalmente me pregunto que razón oculta puede tener otra persona cuando me hace un favor.",
	"Creo que mi vida hogareña es tan agradable como la de mucha gente que conozco.",
	"Es necesario reforzar las leyes vigentes.",
	"Me hieren profundamente las críticas y los retos.",
	"Me gusta cocinar.",
	"Mi conducta es ampliamente controlada por las costumbres que me rodean.",
	"A veces siento que verdaderamente soy un inútil.",
	"Cuando era pertenecía a una banda que intentaba mantenerse unida como “carne y uña”.",
	"Creo en la vida del allá.",
	"Me gustaría ser soldado.",
	"A veces siento deseos de tomarme a puñetazos con alguien.",
	"Frecuentemente he perdido o desaprovechado cosas por no saber decidirme a tiempo.",
	"Me molesta que me pidan consejo o que me interrumpan cuando estoy trabajando en algo importante.",
	"Solía llevar un diario personal.",
	"Creo que se trama algo contra mí.",
	"En un juego o partida suelo más ganar que perder.",
	"Casi todas las noches me duermo con ideas o pensamientos molestos.",
	"Durante los últimos años he estado sano casi siempre.",
	"Nunca he tenido un ataque o convulsión.",
	"Ahora no estoy subiendo o bajando de peso.",
	"Creo que me siguen.",
	"Creo que frecuentemente he sido castigado sin causa.",
	"Lloro con facilidad.",
	"Actualmente no comprendo lo que leo con la facilidad que tenía antes.",
	"Nunca me he sentido mejor que ahora.",
	"A veces siento dolores en la parte superior de la cabeza.",
	"A veces siento que tengo que hacerme daño a mi mismo o a alguien.",
	"Me molesta que alguien se haya burlado tan inteligentemente de mi que yo haya tenido que admitir que lo logró.",
	"No me canso fácilmente.",
	"Me gusta conocer alguna gente importante porque esto me hace sentir importante.",
	"Siento miedo cuando miro hacia abajo desde un lugar alto.",
	"No me sentiría nervioso si algún familiar tuviera problemas con la ley.",
	"Solo me siento feliz cuando viajo de un lado para otro.",
	"Me es indiferente lo que los demás piensen de mi.",
	"Me siento incómodo cuando tengo que hacer una payasada en una reunión, incluso aunque otros la estén haciendo.",
	"Nunca he tenido un desmayo o desvanecimiento.",
	"Me gustaba ir al colegio.",
	"Frecuentemente tengo que esforzarme para no demostrar que soy tímido.",
	"Alguien ha intentado envenenarme.",
	"Las serpientes no me dan mucho miedo.",
	"Nunca o rara vez tengo mareos.",
	"Mi memoria parece ser normal.",
	"Me preocupan los temas sexuales.",
	"Me es difícil entablar una conversación cuando recién conozco a alguien.",
	"He tenido épocas durante las cuales ha realizado actividades que luego no recordaba haber hecho.",
	"Cuando estoy aburrido me gusta promover algo excitante.",
	"Tengo miedo de volverme loco.",
	"Estoy en contra de dar dinero a los mendigos.",
	"Frecuentemente noto temblar mis manos cuando intento hacer algo.",
	"Puedo leer mucho tiempo sin que se me canse la vista.",
	"Me gusta leer y estudiar acerca de lo que estoy trabajando.",
	"Siento debilidad general la mayor parte del tiempo.",
	"Muy pocas veces me duele la cabeza.",
	"Mis manos siguen siendo hábiles.",
	"A veces, cuando estoy preocupado, comienzo a sudar, lo que me molesta mucho.",
	"No he tenido dificultades para mantener el equilibrio al caminar.",
	"Algo no anda bien en mi cabeza.",
	"No tengo accesos de alergia o asma.",
	"He tenido ataques en los que perdía el control de mis movimientos o de la palabra, pero sabía lo que pasaba a mi alrededor.",
	"Me desagradan algunas personas que conozco.",
	"Muy pocas veces sueño despierto.",
	"Me gustaría ser menos tímido.",
	"No me da miedo manejar dinero.",
	"Si fuera periodista me gustaría mucho informar sobre teatro.",
	"Disfruto con muy diferentes clases de juegos o diversiones.",
	"Me gusta flirtear (coquetear).",
	"Los niños me tratan más como a un niño que como a un adulto.",
	"Me gustaría ser periodista.",
	"Mi madre es una buena mujer, (o lo fue, si falleció).",
	"Cuando camino por la vereda evito cuidadosa-mente pisar las baldosas flojas.",
	"Nunca he tenido erupciones en la piel que me hayan preocupado.",
	"Comparando con otros hogares, en el mío hay poco amor o unión.",
	"Con frecuencia, estoy preocupado por algo.",
	"Creo que me gustaría el trabajo de contratista de obras.",
	"Normalmente oigo voces sin saber de donde vienen.",
	"Me gusta la ciencia.",
	"No me cuesta pedir ayuda a mis amigos, incluso aunque no pueda devolverles el favor.",
	"Me gusta mucho cazar.",
	"A menudo a mis padres les molestó el tipo de amigos que tenía.",
	"A veces soy un poco chismoso.",
	"Escucho tan bien como las demás personas.",
	"Alguno de mis familiares tiene costumbres que me molestan y fastidian muchísimo.",
	"A veces me siento capaz de tomar decisiones con extraordinaria facilidad.",
	"Me gustaría pertenecer a varios clubes o asociaciones.",
	"Raramente noto los latidos de mi corazón y pocas veces se me corta la respiración.",
	"Me gusta hablar sobre temas sexuales.",
	"Me gusta visitar lugares donde nunca he estado.",
	"Me han sugerido una forma de vida basada en el deber y desde entonces la he seguido cuida-dosamente.",
	"A veces traté de que alguien no hiciera algo, porque eso estaba en contra de mis principios.",
	"Me enojo fácilmente, pero se me pasa pronto.",
	"He vivido bastante libre e independiente de las normas familiares.",
	"Me preocupo muchísimo.",
	"Alguien ha tratado de robarme.",
	"Casi todos mis familiares simpatizan conmigo.",
	"Hay momentos en que estoy tan nervioso que no puedo estar sentado mucho tiempo.",
	"He tenido desengaños amorosos.",
	"Nunca me preocupo por mi apariencia.",
	"Sueño frecuentemente con cosas que es mejor guardarlas para mí mismo.",
	"Debería enseñarse a los niños lo principal acerca de la vida sexual.",
	"Creo que no soy más nervioso que la mayoría.",
	"Tengo pocos o ningún dolor.",
	"Mi modo de hacer las cosas tiende a ser mal interpretado por los demás.",
	"Algunas veces, sin razón alguna, incluso cuando las cosas van mal, me siento feliz, “flotando entre nubes”.",
	"No culpo a nadie por tratar de apoderarse de todo lo que pueda en este mundo.",
	"Hay personas que están intentando apoderarse de mis ideas y proyectos.",
	"He tenido momentos de nerviosismo que interrumpieron mis actividades, y en los que no sabía que ocurría a mí alrededor.",
	"Puedo mostrarme amistoso con la gente que hace cosas que yo considero incorrectas.",
	"Me gusta estar en un grupo en el que se hacen bromas mutuamente.",
	"En las elecciones, algunas veces, voto candidatos que conozco muy poco.",
	"Me cuesta empezar a hacer cualquier cosa.",
	"Siento que soy una persona condenada.",
	"En el colegio era lento para aprender.",
	"Si fuera artista me gustaría dibujar flores.",
	"No me molesta ser poco elegante.",
	"Transpiro muy fácilmente, incluso en días fríos.",
	"Soy una persona plenamente segura de sí misma.",
	"A veces me es imposible vencer la tentación de robar.",
	"Es más seguro no confiar en nadie.",
	"Me excito mucho una vez por semana o con más frecuencia.",
	"Cuando estoy con un grupo de gente, me altera tener que pensar temas adecuados de conversación.",
	"Cuando estoy abatido (bajoneado), algo emocionante me saca casi siempre de ese estado.",
	"Cuando salgo de casa no me preocupa si la puerta y las ventanas quedan bien cerradas.",
	"Creo que mis pecados son imperdonables.",
	"Tengo entumecimientos en una o más partes de mi piel.",
	"No culpo a aquel que se aprovecha de otro que deja que se aprovechen de él.",
	"Mi vista es tan buena como lo ha sido durante años.",
	"A veces me ha divertido tanto el ingenio de un delincuente, que he deseado que le fuera bien.",
	"A menudo me ha dado la sensación de que gente extraña me ha estado mirando con ojos críticos.",
	"Para mí todo tiene el mismo sabor o gusto.",
	"Todos los días tomo una cantidad excesivamente grande de agua.",
	"La mayor parte de la gente hace amigos porque es probable que le sean útiles.",
	"No noto que me zumben o me chillen los oídos frecuentemente.",
	"De vez en cuando siento fastidio hacia familiares que normalmente quiero.",
	"Si fuera periodista me gustaría mucho informar sobre deportes.",
	"Puedo dormir de día, pero no de noche.",
	"Estoy seguro de que la gente habla de mí.",
	"De cuando en cuando me divierten las bromas o chistes “verdes”.",
	"Comparado con mis amigos, tengo muy pocos miedos.",
	"Puedo iniciar una discusión, en un grupo de personas, sobre un tema que conozco.",
	"Siento siempre aversión por la ley cuando un criminal sale libre gracias a la habilidad de un abogado astuto.",
	"He abusado del alcohol.",
	"Por lo general no le hablo a las personas hasta que ellas me hablan a mí.",
	"Nunca he tenido problemas con la ley.",
	"Tengo épocas en las que me he sentido más animado que de costumbre sin que exista una razón especial.",
	"Me gustaría no ser perturbado por pensamientos sexuales.",
	"Si varias personas se encuentran inculpadas, lo mejor que pueden hacer es ponerse de acuerdo en lo que van a decir y no cambiarlo después.",
	"No me molesta ver sufrir a los animales.",
	"Creo que mi sensibilidad es más intensa que la de la mayor parte de la gente.",
	"En ningún momento de mi vida me ha gustado jugar con muñecos.",
	"Para mí, la vida es tensión la mayor parte del tiempo.",
	"Soy tan susceptible en algunos asuntos que no puedo hablar de ellos.",
	"Me costaba mucho hablar delante de todos en el colegio.",
	"Quero a mi madre (o la quise sí falleció).",
	"Incluso cuando estoy con gente, me siento solo la mayor parte del tiempo.",
	"Consigo todas las simpatías que debería.",
	"Me niego a participar en algunos juegos porque no soy hábil en ellos.",
	"Me parece que hago amigos tan rápido como los demás.",
	"Me desagrada tener gente a mí alrededor.",
	"Dicen que hablo cuando duermo.",
	"Quien provoca la tentación dejando una cosa valiosa sin protegerla es tan culpable del robo como quien la roba.",
	"Pienso que casi todo el mundo diría una mentira para evitar problemas.",
	"Soy más sensible que la mayoría de la gente.",
	"A la mayor parte de la gente le desagrada interiormente dejar lo suyo para ayudar a los demás.",
	"Muchos de mis sueños son sobre temas sexuales.",
	"Mis padres y familiares encuentran más defectos en mí de lo que deberían.",
	"Me aturdo fácilmente.",
	"Me preocupan el dinero y los negocios.",
	"Nunca he estado enamorado de alguien.",
	"Me han asustado ciertas cosas que han hecho algunos de mis familiares.",
	"Casi nunca sueño.",
	"A menudo me salen manchas rojas en el cuello.",
	"Nunca he tenido parálisis ni sufrido una debilidad desacostumbrada en alguno de mis músculos.",
	"Algunas veces pierdo o se me cambia la voz, incluso sin estar resfriado.",
	"Mi padre o mi madre me obligaron frecuentemente a obedecer, incluso cuando yo pensaba que ello no era razonable.",
	"A veces percibo olores extraños.",
	"No puedo concentrarme en una sola cosa.",
	"Tengo razones para sentirme celoso de uno o más de mis familiares.",
	"Casi todo el tiempo siento ansiedad a causa de algo o alguien.",
	"Me impaciento fácilmente con la gente.",
	"Muchísimas veces me gustaría estar muerto.",
	"Muchísimas veces me excito tanto que me cuesta dormirme por las noches.",
	"Sin duda he tenido que preocuparme por más cosas que las que me correspondían.",
	"Nadie parece comprenderme.",
	"A veces oigo tan bien que me molesta.",
	"Olvido enseguida lo que la gente me dice.",
	"Normalmente tengo que pararme a pensar antes de actuar, incluso en asuntos sin importancia.",
	"A menudo cruzo la calle para no encontrarme con alguna persona.",
	"Con frecuencia siento como si las cosas no fueran reales.",
	"La única parte interesante de los diarios es las páginas de los chistes.",
	"Tengo la costumbre de contar con objetos sin importancia, como las bombillas de un letrero luminoso o cosas similares.",
	"Carezco de enemigos que deseen realmente hacerme daño.",
	"Tiendo a ponerme en guardia con aquellos que se muestran algo más amables de lo que yo esperaba.",
	"Tengo pensamientos extraños y originales.",
	"Me pongo ansioso e inquieto cuando tengo que hacer un viaje corto.",
	"Normalmente espero tener éxito en las cosas que hago.",
	"Oigo cosas extrañas cuando estoy solo.",
	"He tenido miedo de cosas o personas que sabía que no podían hacerme daño.",
	"No me da miedo entrar solo a una habitación donde hay gente reunida hablando.",
	"Me da miedo utilizar cuchillos u objetos muy afilados o puntiagudos.",
	"Algunas veces gozo con herir a personas que amo.",
	"Me resulta fácil lograr que la gente me tenga miedo y eso me divierte.",
	"Tengo más dificultad para concentrarme que la que otros parecen tener.",
	"Varias veces he dejado de hacer algo por considerar insuficiente mi habilidad.",
	"Se me ocurren palabras feas, a veces horribles, y no puedo dejarlas de lado.",
	"Algunas veces me ronda en la cabeza un pensamiento sin importancia y me molesta durante días.",
	"Casi a diario ocurre algo que me asusta.",
	"A veces siento que me sobran energías.",
	"Me inclino a tomar las cosas muy en serio.",
	"A veces me ha gustado ser herido por una persona querida.",
	"La gente dice de mi cosas insultantes y vulgares.",
	"Me siento incómodo cuando estoy “bajo techo” (dentro de un edificio o habitación).",
	"Soy poco consiente de mi mismo.",
	"Estoy seguro de que alguien controla mi mente.",
	"En las fiestas y reuniones, en vez de unirme al grupo, es más probable que me siente solo o con otra persona.",
	"La gente me decepciona con frecuencia.",
	"Frecuentemente mis proyectos me han parecido tan llenos de dificultades que he tenido que abandonarlos.",
	"Me gusta mucho ir a bailar.",
	"Durante ciertos períodos mi mente parece trabajar más despacio que de costumbre.",
	"En micros, trenes, suelo conversar con extraños.",
	"Me gustan los niños.",
	"Me gusta jugar y apostar.",
	"Si me dieran la oportunidad, podría hacer cosas que beneficiarían mucho al mundo.",
	"Con frecuencia me he encontrado con personas con reputación de expertas, pero que no eran mejores que yo.",
	"Me siento fracasado cuando me hablan del éxito de alguien que conozco bien.",
	"Con frecuencia pienso: “Me gustaría volver a ser niño”.",
	"Nada me hace más feliz que estar solo.",
	"Si me dieran la oportunidad podría ser un buen líder.",
	"Me molestan las anécdotas indecentes.",
	"Normalmente la gente pide para sus propios derechos más respeto que el que da a los de otras personas.",
	"Me gustan las reuniones sociales porque puedo estar con gente.",
	"Trato de memorizar los cuentos divertidos para poder contárselos a otros.",
	"Una o más veces en mi vida sentí que alguien me obligó a hacer cosas hipnotizándome.",
	"Me resulta difícil abandonar una tarea una vez que la empecé.",
	"Generalmente no me involucro en los chismes que cuentan los que me rodean.",
	"A menudo han sentido celos de mis ideas porque no las pensaron antes.",
	"Me encanta estar con mucha gente (recitales, manifestaciones).",
	"No me preocupa encontrarme con extraños.",
	"Alguien ha tratado de influenciar mi mente.",
	"He fingido “estar enfermo” para evitar hacer algo.",
	"Mis preocupaciones tienden a desaparecer cuando me junto con amigos.",
	"Tiendo a abandonar lo que estoy haciendo si me sale mal.",
	"Me gusta que la gente conozca lo que realmente pienso.",
	"He tenido períodos en los que me sentí tan lleno de fuerzas que no necesitaba dormir.",
	"Siempre que sea posible evito estar en una multitud.",
	"Trato de evitar situaciones de crisis o dificultad.",
	"Me considero capaz de lograr lo que me propongo cuando otros creen que no vale la pena.",
	"Me gustan las fiestas y reuniones sociales.",
	"Muchas veces desee pertenecer al sexo opuesto.",
	"No me enojo fácilmente.",
	"He hecho algunas cosas malas en el pasado que no se las conté a nadie.",
	"La mayoría de la gente puede hacer cosas incorrectas con tal de lograr su propósito.",
	"Me pongo nervioso cuando la gente me hace preguntas personales.",
	"Me siento incapaz de planificar mi futuro.",
	"Me desagrada mi forma de ser.",
	"Generalmente me enojo cuando amigos o familiares me dan consejos.",
	"Me golpearon mucho cuando era chico.",
	"Me molesto cuando la gente me elogia.",
	"Me disgusta escuchar a la gente que da sus opiniones acerca de la vida.",
	"A menudo he tenido desacuerdos serios con gente amiga.",
	"Sé que puedo contar con la ayuda de mi familia cuando las cosas me van mal.",
	"Me gustaba jugar “a la mamá” o “al papá” cuando era niño.",
	"No le tengo miedo al fuego.",
	"Muchas veces me he alejado de alguna persona por temor de decir o hacer algo de lo que después podría arrepentirme.",
	"Sólo puedo expresar lo que realmente siento cuando bebo.",
	"Rara vez tengo momentos de depresión (de bajón).",
	"Me han dicho con frecuencia que tengo mal carácter.",
	"Desearía haber podido dejar de preocuparme por cosas que dije y que pudieron lastimar los sentimientos de algunas personas.",
	"Me siento incapaz de contarle a alguien todas mis cosas.",
	"Le tengo miedo a los relámpagos.",
	"Me gusta que los demás estén intrigados acerca de lo que voy a hacer.",
	"Algunas veces me ha parecido que las dificultades se acumulaban de tal modo que no podía superarlas.",
	"Me da miedo estar solo en la oscuridad.",
	"Muchas veces me ha caído mal ser incomprendido cuando trataba de evitar que alguien se equivocara.",
	"Le tengo miedo a las tormentas con mucho viento.",
	"Frecuentemente pido consejos a otras personas.",
	"El futuro es demasiado incierto para que una persona haga planes importantes.",
	"A menudo, incluso cuando todo me sale bien, siento que nada me importa.",
	"No le tengo miedo al agua.",
	"A menudo tengo que “consultar con la almohada” antes de tomar una decisión.",
	"A menudo la gente ha interpretado mal mis intenciones cuando trataba de ayudarla.",
	"No tengo dificultad al tragar.",
	"Soy una persona tranquila y no me altero fácilmente.",
	"Me gusta combatir a los criminales con sus propias armas.",
	"Merezco un castigo severo por mis pecados.",
	"Me tomo tan en serio las preocupaciones que me cuesta sacármelas de la cabeza.",
	"Me molesta que alguien me observe cuando trabajo aunque sepa que lo hago bien.",
	"A menudo me molesta tanto que alguien trate de “colarse” delante de mí en una cola, que tengo que decirle algo.",
	"A veces pienso que no valgo para nada.",
	"Cuando era chico me hacía “la rabona” en la escuela.",
	"Uno o varios de mis familiares son muy nerviosos.",
	"A veces he tenido que ser duro con personas groseras o inoportunas.",
	"Me preocupo bastante por posibles desgracias.",
	"Tengo opiniones políticas muy definidas.",
	"Me gustaría ser corredor de automovilismo.",
	"Es correcto bordear los límites de la Ley con tal de no violarla claramente.",
	"Me desagradan tanto algunas personas, que me alegro interiormente cuando les llaman la atención por algo que han hecho.",
	"Me pone nervioso tener que esperar.",
	"Tiendo a dejar algo que deseo hacer porque otros piensan que lo encaro incorrectamente.",
	"Cuando era joven me apasionaba lo emocionante.",
	"Con frecuencia me esfuerzo para triunfar sobre alguien que se enfrenta a mí.",
	"Me molesta que me mire gente desconocida, en el colectivo, en los negocios.",
	"El hombre que más tuvo que ver conmigo cuando era niño (como mi padre, mi padrastro, etc) fue muy rígido.",
	"Cuando era chico, me gustaba jugar al rango y a la soga.",
	"Nunca he tenido una “visión”.",
	"Varias veces he cambiado de modo de pensar acerca de mi trabajo.",
	"Nunca tomo drogas o pastillas para dormir, a no ser por orden del médico.",
	"Frecuentemente lamento tener mal carácter o ser tan protestón.",
	"En la escuela, mis calificaciones en conducta fueron generalmente malas.",
	"Me fascina el fuego.",
	"Cuando estoy en una situación difícil sólo digo aquella parte de la verdad que probablemente no me va a perjudicar.",
	"Si estuviera en dificultades junto con varios amigos que fueran tan culpables como yo, preferiría echarme la culpa antes que descubrirlos.",
	"A menudo tengo miedo a la oscuridad.",
	"Cuando un hombre está con una mujer, generalmente está pensando cosas relacionadas con el sexo de ella.",
	"Generalmente “le hablo claro” a la gente que estoy intentando corregir o mejorar.",
	"Me aterroriza la idea de un terremoto.",
	"Rápidamente me convenzo por completo de una buena idea.",
	"Generalmente hago las cosas por mí mismo, en vez de buscar a alguien que me diga como hacerlas.",
	"Siento miedo cuando estoy en un lugar pequeño y cerrado.",
	"Admito que a veces me he preocupado sin motivo alguno por cosas que no valían la pena.",
	"No trato de disimular mi pobre opinión o lástima sobre algunas personas.",
	"Soy una persona de una gran tensión.",
	"Frecuentemente he trabajado a las órdenes de personas que parecen haber arreglado las cosas de tal modo, que ellas son las que reciben el reconocimiento de una buena labor y, en cambio, atribuyen los errores a sus subordinados.",
	"A veces me es difícil defender mis derechos por ser tan reservado.",
	"La suciedad me espanta o me disgusta.",
	"Vivo una vida de ensueños, acerca de la cual no digo nada a nadie.",
	"Algunos de mis familiares tienen mal carácter.",
	"No puedo hacer bien ninguna cosa.",
	"A menudo me he sentido culpable porque he fingido mayor sufrimiento del que realmente sentía.",
	"Por regla general defiendo con tenacidad mis opiniones.",
	"No temo a las arañas.",
	"Para mí el futuro carece de esperanza.",
	"Mis familiares y parientes más cercanos se llevan bastante bien.",
	"Me gustaría tener ropa cara.",
	"La gente puede hacerme cambiar de opinión muy fácilmente, incluso en materias en las que creía tener ya un criterio firme.",
	"Ciertos animales me ponen nervioso.",
	"Puedo soportar tanto dolor como los demás.",
	"Varias veces he sido el último en darme por vencido al tratar de hacer algo.",
	"Me pone de mal humor que la gente me apure.",
	"No tengo miedo a los ratones.",
	"Varias veces a la semana siento como si fuera a suceder algo espantoso.",
	"Me siento cansado una buena parte del tiempo.",
	"Me gusta arreglar las cerraduras de las puertas.",
	"Algunas veces estoy seguro de que otro puede decir lo que estoy pensando.",
	"Me gusta leer temas científicos.",
	"Temo estar solo en lugares amplios y abiertos.",
	"Algunas veces me siento al borde de una crisis nerviosa.",
	"Muchas personas tienen mala conducta sexual.",
	"A menudo he sentido miedo en plena noche.",
	"Me molesta mucho olvidarme donde pongo las cosas.",
	"La persona hacia quien sentía más afecto y admiración cuando era niño, fue una mujer (madre, hermana, tía u otra mujer).",
	"Me gustan más las historias de aventuras que las románticas.",
	"A veces me confundo y no sé que decir.",
	"Soy una persona poco agradable.",
	"Me gustan los deportes fuertes como el fútbol o rugby.",
	"Detesto a mi familia.",
	"Algunas personas piensan que es difícil conocerme, saber como soy.",
	"Paso mucho tiempo a solas.",
	"Me gusta que la gente conozca mi punto de vista cuando hacen cosas que me enojan.",
	"Me cuesta tomar decisiones.",
	"Soy una persona poco atractiva.",
	"La gente es poco amable conmigo.",
	"A veces siento que no soy tan bueno como los demás.",
	"Soy “cabeza dura”.",
	"Me gustó fumar marihuana.",
	"La enfermedad mental es signo de debilidad.",
	"Tengo problemas con la droga o el alcohol.",
	"Los fantasmas o espíritus influyen en la vida de las personas, para bien o para mal.",
	"Me siento desamparado cuando tengo que decidir algo importante.",
	"Trato de ser paciente aún cuando me critican.",
	"Cuando tengo un problema me ayuda el contárselo a otra persona.",
	"Creo que puedo lograr concretar mis proyectos.",
	"Creo que la gente debe “guardarse” sus problemas personales.",
	"En esta etapa de mi vida me siento poco tenso o estresado.",
	"Me molesta pensar en hacer cambios en mi vida.",
	"Mis mayores problemas son causados por la forma de ser de alguien con quien convivo.",
	"Detesto ir al médico aún cuando estoy enfermo.",
	"Aunque soy poco feliz, no puedo hacer nada para modificarlo.",
	"Conversar acerca de los problemas es más útil que tomar remedios para resolverlos.",
	"Tengo tan arraigados uno o varios malos hábitos que es inútil luchar contra ellos.",
	"Si hay que resolver un problema, le dejo la iniciativa a los demás.",
	"Reconozco que cometo errores pero no puedo cambiar.",
	"Me disgusta tanto lo que hago diariamente que quisiera dejar de hacerlo.",
	"He pensado en suicidarme.",
	"Realmente me enojo cuando interrumpen mi trabajo.",
	"A menudo siento que puedo leer lo que otros están pensando.",
	"Me pongo nervioso cuando tengo que tomar una decisión importante.",
	"Dicen que como muy rápido.",
	"Por lo menos una vez por semana me emborracho o me drogo.",
	"Tuve una pérdida afectiva importante en mi vida que no puedo olvidar.",
	"A veces me enojo tanto que no sé lo que digo o hago.",
	"Me cuesta decir que “no” cuando me piden que haga algo.",
	"Sólo soy feliz cuando estoy solo.",
	"Mi vida es vacía y sin sentido.",
	"Me cuesta conservar un trabajo.",
	"Cometí muchos errores en mi vida.",
	"Me enojo conmigo mismo por ser tan generoso con los demás.",
	"Últimamente he pensado mucho en quitarme la vida.",
	"Me agrada ayudar a los demás.",
	"Aunque me quedara sin familia siempre hay alguien que puede ayudarme.",
	"Me disgusta tener que hacer colas en cines teatros o restaurantes.",
	"Nadie sabe que intenté suicidarme.",
	"Todo pasa muy rápido a mi alrededor.",
	"Sé que le resulto “pesado” a la gente.",
	"Después de un mal día, necesito tomar unos tragos para poder relajarme.",
	"Muchos de mis problemas se deben a mi mala suerte.",
	"A veces me resulta difícil dejar de hablar.",
	"A veces me hago daño a mí mismo sin saber por qué.",
	"Trabajo muchas horas sin que ello sea necesario.",
	"Generalmente me siento mejor después de llorar.",
	"Me olvido donde dejo las cosas.",
	"Si volviera a nacer haría las cosas de la misma manera.",
	"Me pone de mal humor que la gente con la que trabajo no haga las cosas a tiempo.",
	"Cuando estoy enojado me duele la cabeza.",
	"Me gusta manejar autos viejos.",
	"Muchos hombres son infieles a sus parejas.",
	"Últimamente, perdí las ganas de preocuparme por mis problemas.",
	"Hubo ocasiones en las que me enojé y rompí cosas por haber bebido mucho.",
	"Trabajo mejor cuando tengo plazos bien definidos.",
	"He llegado a enfurecerme tanto con alguien que creí que iba a estallar.",
	"A veces tengo malos pensamientos sobre mi familia.",
	"La gente me dice que tengo problemas con el alcohol, pero yo no estoy de acuerdo.",
	"Tengo poco tiempo para poder hacer las cosas que debo.",
	"Últimamente, pienso mucho en la muerte y “el más allá”.",
	"Guardo cosas que nunca uso.",
	"He estado tan enojado que llegué a golpear y lastimar a una persona.",
	"En todo lo que hago, siento que me están tomando examen.",
	"Estoy bastante alejado de mis familiares actualmente.",
	"A veces siento que escuchan los que estoy pensando.",
	"Cuando estoy triste, me hace bien visitar amigos.",
	"Siento que lo que me está pasando ahora ya me sucedió antes.",
	"Cuando tengo problemas serios, siento ganas de salir corriendo.",
	"Me da miedo entrar a una habitación oscura, aún en mi propia casa.",
	"Me preocupo mucho por el dinero.",
	"El hombre debe ser la cabeza de la familia.",
	"Sólo me siento relajado en mi casa.",
	"Mis compañeros de trabajo entienden muy poco mis problemas.",
	"Estoy conforme con el dinero que gano.",
	"Generalmente tengo suficiente energía para cumplir con mis tareas.",
	"Me resulta difícil aceptar elogios.",
	"En la mayoría de los matrimonios, una de las personas o ambas son poco felices.", 
	"Casi nunca pierdo el control.",
	"Me cuesta mucho esfuerzo recordar lo que me dicen.",
	"Si me siento triste, trabajo mal.",
	"La mayor parte de los matrimonios no muestran que están enamorados uno del otro."
];

// VRIN and TRIN
rin=[
	[
		// Name, Description, Base score
		["VRIN","Variable Response Inconsistency",0],
		// Question pairs and score
		[
			[3,"T",39,"T",1],
			[6,"T",90,"F",1],
			[6,"F",90,"T",1],
			[9,"F",56,"F",1],
			[28,"T",59,"F",1],
			[31,"T",299,"F",1],
			[32,"F",316,"T",1],
			[40,"T",176,"T",1],
			[46,"T",265,"F",1],
			[48,"T",184,"T",1],
			[49,"T",280,"F",1],
			[73,"T",377,"F",1],
			[81,"T",284,"F",1],
			[81,"F",284,"T",1],
			[83,"T",288,"T",1],
			[84,"T",105,"F",1],
			[86,"T",359,"F",1],
			[95,"F",388,"T",1],
			[99,"F",138,"T",1],
			[103,"T",344,"F",1],
			[110,"T",374,"F",1],
			[125,"F",195,"F",1],
			[135,"F",482,"T",1],
			[136,"T",507,"F",1],
			[136,"F",507,"T",1],
			[152,"F",464,"F",1],
			[161,"T",185,"F",1],
			[161,"F",185,"T",1],
			[165,"F",565,"F",1],
			[166,"T",268,"F",1],
			[166,"F",268,"T",1],
			[167,"T",243,"F",1],
			[167,"F",243,"T",1],
			[196,"F",415,"T",1],
			[199,"T",467,"F",1],
			[199,"F",467,"T",1],
			[226,"T",267,"F",1],
			[259,"F",333,"T",1],
			[262,"F",275,"F",1],
			[290,"T",556,"F",1],
			[290,"F",556,"T",1],
			[339,"F",394,"T",1],
			[349,"T",515,"F",1],
			[349,"F",515,"T",1],
			[350,"F",521,"T",1],
			[353,"T",370,"F",1],
			[353,"F",370,"T",1],
			[364,"F",554,"T",1],
			[369,"F",421,"T",1],
			[372,"T",405,"F",1],
			[372,"F",405,"T",1],
			[380,"T",562,"F",1],
			[395,"T",435,"F",1],
			[395,"F",435,"T",1],
			[396,"T",403,"F",1],
			[396,"F",403,"T",1],
			[411,"T",485,"F",1],
			[414,"F",485,"T",1],
			[472,"T",533,"F",1],
			[472,"F",533,"T",1],
			[491,"T",509,"F",1],
			[506,"T",520,"F",1],
			[506,"F",520,"T",1],
			[513,"T",542,"F",1]
		],
		// Male T scale
		[31,34,38,42,46,50,54,57,61,65,69,73,76,80,84,88,92,96,99,103,107,111,115,118,120],
		// Female T scale
		[30,34,38,42,46,50,54,58,62,66,70,74,78,82,86,90,94,98,102,106,110,114,118,120]
	],[
		["TRIN","True Reponse Inconsistency",9],
		[
			[3,"T",39,"T",1],
			[12,"T",166,"T",1],
			[40,"T",176,"T",1],
			[48,"T",184,"T",1],
			[63,"T",27,"T",1],
			[65,"T",95,"T",1],
			[73,"T",239,"T",1],
			[83,"T",288,"T",1],
			[99,"T",314,"T",1],
			[125,"T",195,"T",1],
			[209,"T",351,"T",1],
			[359,"T",367,"T",1],
			[377,"T",534,"T",1],
			[556,"T",560,"T",1],
			[9,"F",56,"F",-1],
			[65,"F",95,"F",-1],
			[125,"F",195,"F",-1],
			[140,"F",196,"F",-1],
			[152,"F",464,"F",-1],
			[265,"F",360,"F",-1],
			[359,"F",367,"F",-1]
		],
		["114F","107F","99F","92F","85F","78F","71F","64F","57F","50","57T","65T","72T","79T","86T","93T","100T","107T","114T","120T"],
		["118F","111F","103F","95F","88F","80F","73F","65F","58F","50","58T","65T","73T","80T","88T","95T","103T","111T","118T","120T"]
	]
];

// Scales and Critical Items
scales=[
	[
		// Welsch Code, Scale Name, Scale Description
		["F","F","Infrequency"],
		// True questions
		[18,24,30,36,42,48,54,60,66,72,84,96,114,138,144,150,156,162,168,180,198,216,228,234,240,246,252,258,264,270,282,288,294,300,306,312,324,336,349,355,361],
		// False questions
		[6,12,78,90,102,108,120,126,132,174,186,192,204,210,222,276,318,330,343],
		// Male T scale
		[,36,39,42,45,48,51,55,58,61,64,67,70,73,76,79,82,85,89,92,95,98,101,104,107,110,113,116,119,120],
		// Female T scale
		[,37,41,44,48,51,55,58,61,65,68,72,75,79,82,85,89,92,96,99,103,106,109,113,116,120]
	],[
		[,"Fb","Backside F"],
		[281,291,303,311,317,319,322,323,329,332,333,334,387,395,407,431,450,454,463,468,476,478,484,489,506,516,517,520,524,525,526,528,530,539,540,544,555],
		[383,404,501],
		[,42,46,51,55,59,63,67,71,75,79,83,87,92,96,100,104,108,112,116,120],
		[,42,46,50,54,58,62,66,70,74,77,81,85,89,93,97,101,105,108,112,116,120]
	],[
		[,"Fp","Infrequency Psychopathology"],
		[66,114,162,193,216,228,252,270,282,291,294,322,323,336,371,387,478,555],
		[51,77,90,93,102,126,192,276,501],
		[,41,48,56,63,70,77,80,94,99,106,113,120],
		[,41,49,57,65,73,81,89,97,105,113,120]
	],[
		["L","L","Lie"],
		[],
		[16,29,41,51,77,93,102,107,123,139,153,183,203,232,260],
		[,35,39,43,48,52,56,61,65,70,74,78,83,87,91,96,100],
		[,33,38,42,47,52,57,62,66,71,76,81,86,90,95,100,105]
	],[
		["K","K","Correction"],
		[83],
		[29,37,58,76,110,116,122,127,130,136,148,157,158,167,171,196,213,243,267,284,290,330,338,339,341,346,348,356,365],
		[,,,,,,,30,33,35,37,39,41,43,45,47,49,51,54,56,58,60,62,64,66,68,70,72,75,77,79,81],
		[,,,,,,,30,32,35,37,39,41,43,46,48,50,52,54,56,59,61,63,65,67,70,72,74,76,78,81,83]
	],[
		[,"S","Superlative Self-Presentation"],
		[121,148,184,194,534,560],
		[15,50,58,76,81,87,89,104,110,120,123,154,196,205,213,225,264,279,284,290,302,337,341,346,352,373,374,403,420,423,428,430,433,442,445,449,461,486,487,523,538,542,545,547],
		[,,,,,,,,,30,32,33,34,35,36,37,38,40,41,42,43,44,45,47,48,49,50,51,52,53,55,56,57,58,59,60,61,63,64,65,66,67,68,70,71,72,73,74,75,76,78,79],
		[,,,,,,,,,,30,31,33,34,35,36,37,39,40,41,42,43,45,46,47,48,49,51,52,53,54,55,57,58,59,60,61,63,64,65,66,68,69,70,71,72,74,75,76,77,78,80]
	],[
		["1","Hs","Hypochondriasis"],
		[18,28,39,53,59,97,101,111,149,175,247],
		[2,3,8,10,20,45,47,57,91,117,141,143,152,164,173,176,179,208,224,249,255],
		[0.5,,,30,31,31,32,33,35,37,39,42,45,48,51,54,57,59,62,64,66,68,70,73,75,77,79,81,84,86,88,90,92,94,97,99,101,103,105,108,110,112,114,116,119,120],
		[0.5,,,,,,,30,33,35,38,40,43,46,49,51,54,56,59,61,63,65,67,69,71,73,76,78,80,82,84,86,88,90,92,94,97,99,101,103,105,107,109,111,113,115,117,120]
	],[
		["2","D","Depression"],
		[5,15,18,31,38,39,46,56,73,92,117,127,130,146,147,170,175,181,215,233],
		[2,9,10,20,29,33,37,43,45,49,55,68,75,76,95,109,118,134,140,141,142,143,148,165,178,188,189,212,221,223,226,238,245,248,260,267,330],
		[,,,,,,,,,,30,32,34,36,38,40,42,45,47,50,52,54,57,59,61,62,64,66,68,70,72,74,76,78,80,81,83,85,87,89,91,93,95,97,98,100,102,104,106,108,110,112,114,115,117,119,120],
		[,,,,,,,,,,,30,32,34,36,38,40,42,44,46,47,49,51,53,55,57,59,62,64,66,68,70,72,75,77,79,81,83,86,88,90,92,94,96,99,101,103,105,107,109,112,114,116,118,120]
	],[
		["3","Hy","Hysteria"],
		[11,18,31,39,40,44,65,101,166,172,175,218,230],
		[2,3,7,8,9,10,14,26,29,45,47,58,76,81,91,95,98,110,115,116,124,125,129,135,141,148,151,152,157,159,161,164,167,173,176,179,185,193,208,213,224,241,243,249,253,263,265],
		[,,,,,,,,,30,31,32,33,34,35,37,39,40,42,43,45,47,50,52,54,57,59,61,64,66,69,71,74,76,79,81,84,86,89,91,94,96,99,101,104,106,109,111,114,116,119,120],
		[,,,,,,,,,,30,31,32,32,34,35,36,38,39,41,43,45,47,49,51,54,56,58,61,63,65,68,70,73,75,77,80,82,84,87,89,90,92,94,96,99,101,104,106,108,111,113,115,118,120]
	],[
		["4","Pd","Psychopathic Deviate"],
		[17,21,22,31,32,35,42,52,54,56,71,82,89,94,99,105,113,195,202,219,225,259,264,288],
		[9,12,34,70,79,83,95,122,125,129,143,157,158,160,167,171,185,209,214,217,226,243,261,263,266,267],
		[0.4,,,,,,,,,,,,30,31,33,34,35,37,39,40,42,44,46,48,50,52,54,57,59,62,64,67,69,72,74,77,79,82,84,87,90,92,95,97,100,102,105,107,110,112,115,117,120],
		[0.4,,,,,,,,,,,,,30,32,34,36,37,39,41,43,45,47,49,51,53,55,58,60,63,66,68,71,73,76,79,81,84,87,89,92,94,97,100,102,105,107,110,113,115,118,120]
	],[
		["5","Mf","Masculinity-Femininity - Male"],
		[4,25,62,64,67,74,80,112,119,122,128,137,166,177,187,191,196,205,209,219,236,251,256,268,271],
		[1,19,26,27,63,68,69,76,86,103,104,107,120,121,132,133,163,184,193,194,197,199,201,207,231,235,237,239,254,257,272],
		[,,,,,,,,,,,,,,,,,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,666,68,70,72,72,76,78,79,81,83,85,87,89,91,93,95,97,99,101,103,105,107,109],
		[],
	],[
		["5","Mf","Masculinity-Femininity - Female"],
		[4,25,62,64,67,74,80,112,119,121,122,128,137,177,187,191,196,205,219,236,251,256,271],
		[1,19,26,27,63,68,69,76,86,103,104,107,120,132,133,163,166,184,193,194,197,199,201,207,209,231,235,237,239,254,257,268,272],
		[],
		[,,,,,,,,120,118,116,114,111,109,106,104,101,99,96,94,92,89,87,84,82,79,77,74,72,69,67,65,62,60,57,55,52,50,47,45,43,40,38,35,33,30]
	],[
		["6","Pa","Paranoia"],
		[16,17,22,23,24,42,99,113,138,144,145,146,162,234,259,271,277,285,305,307,333,334,336,355,361],
		[81,95,98,100,104,110,244,255,266,283,284,286,297,314,315],
		[,,,30,31,32,34,37,39,42,46,49,53,57,61,64,68,72,75,79,83,86,90,94,97,101,105,108,112,116,119,120],
		[,,,30,31,32,34,37,39,42,45,49,52,56,59,63,67,70,74,78,81,85,89,92,96,100,103,107,111,114,118,120]
	],[
		["7","Pt","Psychathenia"],
		[11,16,23,31,38,56,65,73,82,89,94,130,147,170,175,196,218,242,273,275,277,285,289,301,302,304,308,309,310,313,316,317,320,325,326,327,328,329,331],
		[3,9,33,109,140,165,174,293,321],
		[1.0,,,,,,,,,,,,,,,30,31,32,33,34,36,37,39,41,43,44,47,49,51,53,55,57,59,62,64,66,68,70,72,74,77,79,81,93,85,87,89,91,94,96,98,100,102,104,106,109,111,113,115,117,119,120],
		[1.0,,,,,,,,,,,,,,,,,30,31,32,33,35,37,38,40,42,44,47,49,51,53,55,57,59,61,62,64,66,68,70,72,73,75,77,79,81,83,84,86,88,90,92,94,95,97,99,101,103,105,106,108,110,112,114,116,117,119,120]
	],[
		["8","Sc","Schizophrenia"],
		[16,17,21,22,23,31,32,35,38,42,44,46,48,65,85,92,138,145,147,166,168,170,180,182,190,218,221,229,233,234,242,247,252,256,268,273,274,277,279,281,287,291,292,296,298,299,303,307,311,316,319,320,322,323,325,329,332,333,355],
		[6,9,12,34,90,91,106,165,177,179,192,210,255,276,278,280,290,295,343],
		[1.0,,,,,,,,,,,,,30,31,32,33,34,35,36,37,39,4,42,44,45,47,49,51,53,55,56,58,60,62,63,65,67,69,70,72,74,75,77,79,81,82,84,86,87,89,91,93,94,96,98,99,101,103,105,106,108,110,111,113,115,117,118,120],
		[1.0,,,,,,,,,,,,,,30,31,32,33,34,36,37,39,41,42,44,46,48,50,52,53,55,57,59,60,62,63,65,66,67,69,70,72,73,75,76,78,79,81,82,84,85,87,88,90,91,93,94,96,97,99,100,102,103,105,106,108,109,111,112,114,115,116,118,119,120]
	],[
		["9","Ma","Hypomania"],
		[13,15,21,23,50,55,61,85,87,98,113,122,131,145,155,168,169,182,190,200,205,206,211,212,218,220,227,229,238,242,244,248,250,253,269],
		[88,93,100,106,107,136,154,158,167,243,263],
		[0.2,,,,,,,,,,30,31,33,35,36,38,39,41,43,45,47,49,51,53,56,59,62,65,59,72,75,78,81,82,88,91,94,98,101,104,107,110,114,117,120],
		[0.2,,,,,,,,,,30,31,33,35,37,39,41,43,45,47,49,51,53,56,59,62,65,68,71,74,76,79,82,85,88,91,94,97,100,103,106,109,112,115,118,120]
	],[
		["0","Si","Social Introversion"],
		[31,56,70,100,104,110,127,135,158,161,167,185,215,243,251,265,275,284,289,296,302,308,326,337,338,347,348,351,352,357,364,367,368,369],
		[25,32,49,79,86,106,112,131,181,189,207,209,231,237,255,262,267,280,321,328,335,340,342,344,345,350,353,354,358,359,360,362,363,366,370],
		[,,,,,,,,,,30,31,33,34,35,36,37,38,40,41,42,43,44,45,47,48,49,50,51,52,54,55,56,57,58,59,61,62,63,64,65,66,68,69,70,71,72,73,75,76,77,78,79,80,82,83,84,85,86,87,89,90,91,92,93,94,96,97,98,99,100],
		[,,,,,,,,,30,31,32,33,34,35,36,37,38,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,95]
	],[
		[,"D1","Subjective Depression"],
		[31,38,39,46,56,73,92,127,130,146,147,170,175,215,223],
		[2,9,43,49,75,95,109,118,140,148,178,188,189,223,260,267,330],
		[,32,35,37,40,42,45,48,50,53,56,58,61,64,66,69,71,74,77,79,82,85,87,90,93,95,98,100,103,106,108,111,114,116],
		[,32,34,37,39,41,44,46,48,51,53,56,58,60,63,65,67,70,72,75,77,79,82,84,86,89,91,94,96,98,101,103,105,108]
	],[
		[,"D2","Psychomotor Retardation"],
		[38,46,170,233],
		[9,29,37,49,55,76,134,188,189,212],
		[,,30,32,37,43,48,54,59,65,70,76,81,87,92,98],
		[,,,30,35,41,46,51,57,62,68,73,79,84,90,95]
	],[
		[,"D3","Physical Malfunctioning"],
		[18,117,175,181],
		[2,20,45,141,142,143,148],
		[,30,35,43,51,59,67,75,83,91,100,108,116],
		[,30,34,41,48,56,63,70,78,85,93,100,107]
	],[
		[,"D4","Mental Dullness"],
		[15,31,38,73,92,147,170,233],
		[9,10,43,75,109,165,188],
		[,38,43,48,53,58,62,67,72,77,82,86,91,96,101,105,110],
		[,38,43,48,52,57,61,66,70,75,79,84,88,93,97,102,106]
	],[
		[,"D5","Brooding"],
		[38,56,92,127,130,146,170,215],
		[75,95],
		[,40,45,51,57,62,68,74,79,85,91,96],
		[,37,42,47,53,58,63,68,73,78,83,89]
	],[
		[,"Hy1","Denial of Social Anxiety"],
		[],
		[129,161,167,185,243,265],
		[,30,34,40,45,51,56,61],
		[,30,35,40,45,51,56,61]
	],[
		[,"Hy2","Need for Affection"],
		[230],
		[26,58,76,81,98,110,124,151,213,241,263],
		[,,30,32,36,40,43,47,51,55,59,63,67,71],
		[,,,30,34,38,42,46,50,55,59,63,67,71]
	],[
		[,"Hy3","Lassitude-malaise"],
		[31,39,65,175,218],
		[2,3,9,10,45,95,125,141,148,152],
		[,38,43,48,52,57,61,66,70,75,79,84,88,93,97,102,106],
		[,39,43,47,51,55,59,63,67,71,75,79,83,87,91,95,99]
	],[
		[,"Hy4","Somatic Complaints"],
		[11,18,40,44,101,172],
		[8,47,91,159,164,173,176,179,208,224,249],
		[,38,43,48,52,57,62,67,72,77,82,86,91,96,101,106,111,115,120],
		[,37,41,45,49,53,57,61,65,69,73,77,81,85,89,93,97,101,105]
	],[
		[,"Hy5","Inhibition of Aggression"],
		[],
		[7,14,29,115,116,135,157],
		[,30,33,40,48,55,63,71,78],
		[,30,31,39,46,54,62,70,77]
	],[
		[,"Pd1","Familial Discord"],
		[21,54,195,202,288],
		[83,125,214,217],
		[,38,45,51,58,65,71,78,84,91,98],
		[,38,44,50,56,62,68,74,80,86,92]
	],[
		[,"Pd2","Authority Problems"],
		[35,105],
		[34,70,129,160,263,266],
		[,30,35,42,48,55,61,68,74,81],
		[,30,38,46,53,61,69,77,84,92]
	],[
		[,"Pd3","Social Imperturbability"],
		[],
		[70,129,158,167,185,243],
		[,30,35,40,46,52,58,64],
		[,30,35,41,47,52,58,64]
	],[
		[,"Pd4","Social Alienation"],
		[17,22,42,56,82,99,113,219,225,259],
		[12,129,157],
		[,30,36,41,46,51,57,62,67,73,78,83,88,94,99],
		[,30,33,38,44,49,54,60,65,70,75,81,86,91,97]
	],[
		[,"Pd5","Self-alienation"],
		[31,32,52,56,71,82,89,94,113,264],
		[9,95],
		[,34,38,43,48,53,58,63,67,72,77,82,87,91],
		[,34,39,43,48,53,58,63,68,72,77,82,87,92]
	],[
		[,"Pa1","Persecutory Ideas"],
		[17,22,42,99,113,138,144,145,162,234,259,305,333,336,355,361],
		[314],
		[,40,46,52,58,64,70,76,82,88,94,100,106,112,118,120],
		[,39,45,51,57,63,69,75,81,87,93,99,105,111,117,120]
	],[
		[,"Pa2","Poignancy"],
		[22,146,271,277,285,307,334],
		[100,244],
		[,34,41,48,55,62,69,76,82,89,96],
		[,34,40,46,53,59,65,72,78,84,91]
	],[
		[,"Pa3","Naivete"],
		[16],
		[81,98,104,110,283,284,286,315],
		[,30,32,36,41,46,51,56,60,65,70],
		[,30,31,36,41,45,50,55,60,65,69]
	],[
		[,"Sc1","Social Alienation"],
		[17,21,22,42,46,138,145,190,221,256,277,281,291,292,320,333],
		[90,276,278,280,343],
		[,39,43,47,51,55,59,64,68,72,76,80,84,88,92,97,101,105,109,113,117,120],
		[,38,42,46,50,53,57,61,65,69,73,77,81,84,88,92,96,100,104,108,111,115,119]
	],[
		[,"Sc2","Emotional Alienation"],
		[65,92,234,273,303,323,329,332],
		[9,210,290],
		[,40,50,59,69,78,88,98,107,117,120],
		[,40,49,58,67,76,86,95,104,113,120]
	],[
		[,"Sc3","Lack of Ego Mastery, Cognitive"],
		[31,32,147,170,180,299,311,316,325],
		[165],
		[,42,48,54,60,66,72,78,84,90,96,103],
		[,43,49,55,61,67,74,80,86,92,98,104]
	],[
		[,"Sc4","Lack of Ego Mastery, Conative"],
		[31,38,48,65,92,233,234,273,299,303,325],
		[9,210,290],
		[,39,44,49,55,60,65,71,76,82,87,92,98,103,109,114],
		[,39,44,49,54,59,65,40,75,80,85,90,95,100,106,111]
	],[
		[,"Sc5","Lack of Ego Mastery, Defective Inhibition"],
		[23,85,168,182,218,242,274,320,322,329,355],
		[],
		[,40,47,54,61,68,75,82,89,96,103,110,117],
		[,40,46,53,59,65,72,78,85,91,97,104,110]
	],[
		[,"Sc6","Bizarre Sensory Experiences"],
		[23,32,44,168,182,229,247,252,296,298,307,311,319,355],
		[91,106,177,179,255,295],
		[,41,46,51,55,60,65,70,75,80,85,90,95,99,104,109,114,119,120],
		[,41,45,50,54,59,63,68,72,77,81,86,91,95,100,104,109,113,118,120]
	],[
		[,"Ma1","Amorality"],
		[131,227,248,250,269],
		[263],
		[,35,42,50,58,66,74,81],
		[,37,45,54,62,70,79,87]
	],[
		[,"Ma2","Psychomotor Acceleration"],
		[15,85,87,122,169,206,218,242,244],
		[100,106],
		[,,30,34,39,44,49,53,58,63,68,73,78],
		[,,30,35,40,45,50,55,60,65,70,75,80]
	],[
		[,"Ma3","Imperturbability"],
		[155,200,220],
		[93,136,158,167,243],
		[,30,35,41,47,53,59,65,71,77],
		[,30,37,43,50,56,62,69,75,82]
	],[
		[,"Ma4","Ego Inflation"],
		[13,50,55,61,98,145,190,211,212],
		[],
		[,30,37,43,50,56,63,69,76,82,89],
		[,31,37,43,49,56,62,68,74,80,86]
	],[
		[,"Si1","Shyness/Self-Consciousness"],
		[158,161,167,185,243,265,275,289],
		[49,262,280,321,342,360],
		[,36,39,42,45,48,51,53,56,59,62,65,68,71,74,77],
		[,36,38,41,44,46,49,52,55,57,60,63,65,68,71,74]
	],[
		[,"Si2","Social Avoidance"],
		[337,367],
		[86,340,353,359,363,370],
		[,37,41,45,49,54,58,62,67,71],
		[,37,42,47,51,56,60,65,69,74]
	],[
		[,"Si3","Self/Other Alienation"],
		[31,56,104,110,135,284,302,308,326,328,338,347,348,358,364,368,369],
		[],
		[,35,38,41,44,47,50,53,56,59,62,65,68,71,74,77,80,83,86],
		[,35,38,41,44,47,49,52,55,58,61,63,66,69,72,74,77,80,83]
	],[
		[,"ANX","Anxiety"],
		[15,30,31,39,170,196,273,290,299,301,305,339,408,415,463,469,509,556],
		[140,208,223,405,496],
		[,35,39,42,45,47,50,52,53,55,57,60,62,65,67,70,72,75,77,80,82,85,87,90,92],
		[,34,37,40,43,45,47,49,51,53,55,56,59,61,64,66,69,71,74,76,79,81,84,86,89]
	],[
		[,"FRS","Fears"],
		[154,317,322,329,334,392,395,397,435,438,441,447,458,468,471,555],
		[115,163,186,385,401,453,462],
		[,35,41,45,48,51,54,57,60,64,67,70,74,77,80,84,87,90,93,97,100,103,107,110,113],
		[,31,35,38,41,43,46,48,51,53,56,59,62,65,68,72,75,78,81,85,88,91,94,98,101]
	],[
		[,"OBS","Obsessivness"],
		[55,87,135,196,309,313,327,328,394,442,482,491,497,509,547,553],
		[],
		[,33,37,41,44,47,50,53,56,59,63,66,70,73,77,80,84,87],
		[,32,37,41,44,46,48,50,53,56,59,63,67,71,75,79,83,87]
	],[
		[,"DEP","Depression"],
		[38,52,56,65,71,82,92,130,146,215,234,246,277,303,306,331,377,399,400,411,454,506,512,516,520,539,546,554],
		[3,9,75,95,388],
		[,36,41,45,48,51,53,55,56,58,59,61,63,65,66,68,70,71,73,75,77,78,80,82,83,85,87,88,90,92,94,95,97,99,100],
		[,34,39,42,45,48,50,52,54,55,57,58,60,62,63,65,67,68,70,72,73,75,77,78,80,82,83,85,87,88,90,92,93,95,97]
	],[
		[,"HEA","Health Concerns"],
		[11,18,28,36,40,44,53,59,97,101,111,149,175,247],
		[20,33,45,47,57,91,117,118,141,142,159,164,176,179,181,194,204,224,249,255,295,404],
		[,33,37,41,44,48,51,53,56,58,60,62,64,66,68,70,72,74,76,78,80,81,83,85,87,89,91,93,95,97,99,101,103,105,106,108,110,112],
		[,32,36,40,43,46,49,51,53,55,57,59,61,63,64,66,68,70,72,74,76,77,79,81,83,85,87,89,90,92,94,96,98,100,101,103,105,107]
	],[
		[,"BIZ","Bizarre Mentation"],
		[24,32,60,96,138,162,198,228,259,298,311,316,319,333,336,355,361,466,490,508,543,551],
		[427],
		[,39,46,51,54,57,60,63,67,70,74,77,81,84,88,91,94,98,101,105,108,112,115,119,120],
		[,39,47,52,56,58,61,64,67,70,73,76,79,81,84,87,90,93,96,99,102,105,108,110,113]
	],[
		[,"ANG","Anger"],
		[29,37,116,134,302,389,410,414,430,461,486,513,540,542,548],
		[564],
		[,32,36,40,43,46,48,50,53,56,59,63,67,70,74,78,82,86],
		[,31,36,39,42,45,47,50,53,56,60,64,68,72,76,80,84,88]
	],[
		[,"CYN","Cynicism"],
		[50,58,76,81,104,110,124,225,241,254,283,284,286,315,346,352,358,374,399,403,445,470,538],
		[],
		[,32,35,38,40,41,43,44,46,47,48,49,51,52,54,56,59,62,65,68,71,74,77,80,83],
		[,32,35,38,40,42,44,46,47,48,50,51,53,54,56,58,61,64,67,69,72,75,77,80,83]
	],[
		[,"ASP","Antisocial Practices"],
		[26,35,66,81,84,104,105,110,123,227,240,248,250,254,269,283,284,374,412,418,419],
		[266],
		[,30,34,37,40,42,44,46,47,49,51,53,55,58,62,65,69,72,76,79,83,87,90,94],
		[,33,36,39,42,45,47,49,42,54,56,59,63,66,69,72,75,79,82,85,88,91,94,98]
	],[
		[,"TPA","Type A"],
		[27,136,151,212,302,358,414,419,420,423,430,437,507,510,523,531,535,541,545],
		[],
		[,30,32,36,38,41,43,44,46,48,50,53,56,60,64,68,72,77,81,85,89],
		[,30,33,36,38,41,43,45,48,50,53,56,60,64,69,73,77,81,85,90,94]
	],[
		[,"LSE","Low Self-esteem"],
		[70,73,130,235,326,369,376,380,411,421,450,457,475,476,483,485,503,504,519,526,562],
		[61,78,109],
		[,35,41,45,48,51,53,55,57,59,62,64,67,70,72,75,77,80,83,85,88,91,93,96,98,101],
		[,35,40,44,47,49,51,52,54,55,57,60,62,65,68,70,73,76,78,81,84,86,89,92,94,97]
	],[
		[,"SOD","Social Discomfort"],
		[46,158,167,185,265,275,281,337,349,367,479,480,515],
		[49,86,262,280,321,340,353,359,360,363,370],
		[,32,35,39,41,43,45,47,49,50,52,54,55,58,60,63,65,68,71,73,76,78,81,84,86,89],
		[,32,35,39,41,44,46,48,49,51,52,54,56,58,60,63,65,68,70,72,75,77,80,82,84,87]
	],[
		[,"FAM","Family Problems"],
		[21,54,145,190,195,205,256,292,300,323,378,379,382,413,449,478,543,550,563,567],
		[83,125,217,383,455],
		[,33,37,41,44,47,50,52,55,57,60,63,66,68,71,74,77,80,82,85,88,91,94,97,99,102,105],
		[,32,36,39,42,45,47,50,52,55,57,60,62,65,68,70,73,75,78,81,83,86,89,91,94,96,99]
	],[
		[,"WRK","Work Interference"],
		[15,17,31,54,73,98,135,233,243,299,302,339,364,368,394,409,428,445,464,491,505,509,517,525,545,554,559,566],
		[10,108,318,521,561],
		[,33,36,39,41,44,46,48,50,52,54,56,57,59,61,63,65,67,68,70,72,74,76,78,79,81,83,85,87,89,90,92,94,96,98],
		[,31,34,37,40,43,45,46,48,50,51,52,54,55,57,59,61,63,65,67,69,70,73,76,78,80,82,84,86,88,90,92,95,97,99]
	],[
		[,"TRT","Negative Treatment Indicators"],
		[22,92,274,306,364,368,373,375,376,377,391,399,482,488,491,495,497,499,500,504,528,539,554],
		[493,494,501],
		[,35,39,43,47,49,52,54,56,59,61,64,66,69,71,74,76,79,81,84,86,89,91,94,96,99,101,104],
		[,35,39,43,46,49,51,53,55,57,59,61,64,67,69,72,74,77,79,82,84,87,89,92,95,97,100,102]
	],[
		[,"A","Anxiety"],
		[31,38,56,65,82,127,135,215,233,243,251,273,277,289,301,309,310,311,325,328,338,339,341,347,390,391,394,400,408,411,415,421,428,442,448,451,464,469],
		[388],
		[,36,37,39,40,42,43,44,46,47,49,50,51,53,54,56,57,58,60,61,63,64,65,67,68,70,71,73,74,75,77,78,80,81,82,84,85,87,88,89,91],
		[,35,37,38,39,40,42,43,44,45,47,48,49,50,52,53,54,56,57,58,59,61,62,63,64,66,67,68,69,71,72,73,74,76,77,76,80,81,82,83,85]
	],[
		[,"R","Repression"],
		[],
		[1,7,10,14,37,45,69,112,118,120,128,134,142,168,178,189,197,199,248,255,256,297,330,346,350,353,354,359,363,365,422,423,430,432,449,456,465],
		[,,,,,,,30,32,34,36,39,41,43,45,47,50,52,54,56,58,61,63,65,67,69,72,74,76,81,83,85,87,89,92,94,96,98],
		[,,,,,,,,,30,31,33,36,39,41,44,46,49,52,54,57,60,62,65,67,70,73,75,78,81,83,86,88,91,94,96,99,102,104]
	],[
		[,"Es","Ego Strength"],
		[2,33,45,98,141,159,169,177,179,189,199,209,213,230,245,325,385,406,413,425],
		[23,31,32,36,39,53,60,70,82,87,119,128,175,196,215,221,225,229,236,246,307,310,316,328,391,394,441,447,458,464,469,471],
		[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,30,31,34,36,38,40,42,45,47,49,51,54,56,58,60,63,65,67,69,72,74,76,78,81,83],
		[,,,,,,,,,,,,,,,,,,,,,,,,,30,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,64,66,68,70,72,74,76,78,80,82,84,86]
	],[
		[,"MAC-R","MacAndrew Alcoholism Scale-Revised"],
		[7,24,36,49,52,69,72,82,84,103,105,113,115,128,168,172,202,214,224,229,238,257,280,342,344,407,412,414,422,434,439,445,456,473,502,506,549],
		[73,107,117,137,160,166,251,266,287,299,325,387],
		[,,,,,,,,,,,,,,30,32,34,37,39,41,44,46,48,51,53,55,58,60,62,64,67,69,72,74,76,78,81,83,85,88,90,92,95,97,99,102,104,106,109,111,113],
		[,,,,,,,,,,,,30,31,34,37,40,42,45,48,50,53,56,59,61,64,67,69,72,75,78,80,83,86,88,91,94,96,99,102,105,107,110,113,115,116,120]
	],[
		[,"AAS","Addiction Acknowledgement"],
		[172,264,288,362,387,487,489,511,527,544],
		[266,429,501],
		[,36,41,46,51,56,60,65,70,75,80,85,90,95,100],
		[,39,44,50,56,61,67,7,78,84,90,95,101,107,113]
	],[
		[,"APS","Addiction Potential"],
		[7,29,41,89,103,113,120,168,183,189,196,217,242,260,267,341,342,344,377,422,502,523,540],
		[4,43,76,104,137,157,220,239,306,312,349,440,495,496,500,504],
		[,,,,,,,,,,,,,,,,,30,33,35,38,41,44,46,49,52,54,57,60,63,65,68,71,73,76,79,82,84,87,90,92],
		[,,,,,,,,,,,,,,,,30,31,33,36,39,42,44,47,50,52,55,58,60,63,66,69,71,74,77,79,82,85,87,90,93]
	],[
		[,"MDS","Marital Distress"],
		[21,22,135,195,219,382,484,563],
		[12,83,95,125,493,494],
		[,37,42,46,51,56,60,65,69,74,79,83,88,92,97,102],
		[,38,42,46,50,55,59,63,68,72,76,80,85,89,93,98]
	],[
		[,"Ho","Hostility"],
		[19,27,46,50,58,76,81,99,104,110,124,136,145,171,205,225,227,241,248,251,254,259,265,286,306,315,338,346,347,352,357,358,386,393,398,406,414,419,423,425,436,443,445,452,457,466,470],
		[217,230,372],
		[,,30,31,32,33,34,35,36,38,39,40,41,42,44,45,46,47,48,50,51,52,53,54,56,57,58,59,60,62,63,64,65,66,67,69,70,71,72,73,75,76,77,78,79,81,82,83,84,85,87,88],
		[,,30,31,32,34,35,36,37,39,40,41,42,44,45,46,47,49,50,51,52,54,55,56,58,59,60,61,63,64,65,66,68,69,70,71,73,74,75,76,78,79,80,82,83,84,85,87,88,89,90,92]
	],[
		[,"O-H","Overcontrolled Hostility"],
		[67,79,207,286,305,398,471],
		[1,15,29,69,77,89,98,116,117,129,153,169,171,293,344,390,400,420,433,440,460],
		[,,,,,,,30,31,35,38,41,45,48,52,55,59,62,65,69,72,76,79,82,86,89,93,96,99,103],
		[,,,,,,,,,30,33,37,41,44,48,52,55,59,63,66,70,74,77,81,85,88,92,96,99,103]
	],[
		[,"Do","Dominance"],
		[55,207,232,245,386,416],
		[31,52,70,73,82,172,201,202,220,227,243,244,275,309,325,399,412,470,473],
		[,,,,,,,,,,,30,31,34,38,41,45,48,51,55,58,61,65,68,72,75,78],
		[,,,,,,,,,,,30,32,35,39,42,46,49,53,56,59,63,66,70,73,77,80]
	],[
		[,"Re","Social Responsibility"],
		[100,160,199,266,440,467],
		[7,27,29,32,84,103,105,145,164,169,201,202,235,275,358,412,417,418,430,431,432,456,468,470],
		[,,,,,,,,,,,,,30,32,34,37,39,42,45,47,50,52,55,57,60,63,65,68,70,73,76],
		[,,,,,,,,,,,,,,,30,32,35,38,41,44,47,50,53,56,59,62,65,68,71,74,77]
	],[
		[,"Mt","College Maladjustment"],
		[15,16,28,31,38,71,73,81,82,110,130,215,218,233,269,273,299,302,325,331,339,357,408,411,449,464,469,472],
		[2,3,9,10,20,43,95,131,140,148,152,223,405],
		[,32,34,36,37,39,40,42,43,45,46,48,50,51,53,54,56,57,59,60,62,64,65,67,68,70,71,73,74,76,77,79,81,82,84,85,87,88,30,31,93,95,96],
		[,32,34,35,37,38,40,41,42,44,45,47,48,50,51,52,54,55,57,58,60,61,62,64,65,67,68,70,71,72,74,75,77,78,80,81,82,84,85,87,88,90,91]
	],[
		[,"GM","Masculine Gender Role"],
		[8,20,143,152,159,163,176,199,214,237,321,331,350,385,388,401,440,462,467,474],
		[4,23,44,64,70,73,74,80,100,137,146,187,289,351,364,392,395,435,438,441,469,471,498,509,519,532,536],
		[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,30,31,34,36,38,40,42,45,47,49,51,53,56,58,60,62,64,66,69,71],
		[,,,,,,,,,,,,,,,,,30,32,33,35,36,38,40,41,43,44,46,47,49,50,52,53,55,56,58,59,61,63,64,66,67,69,70,72,73,75,76,78]
	],[
		[,"GF","Feminine Gender Role"],
		[62,67,119,121,128,263,266,353,384,426,449,456,475,552],
		[1,27,63,68,79,84,105,123,133,155,197,201,203,220,231,238,239,250,257,264,272,287,406,417,465,477,487,510,511,537,548,550],
		[,,,,,,,,,,,,,,,,,,,30,32,34,37,39,41,43,45,47,49,51,54,56,58,60,62,64,66,68,71,73,75,77,79,81,83,85,88,90],
		[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,30,33,35,38,40,43,46,48,51,53,56,59,61,64,66,69,71]
	],[
		[,"PK","Post-traumatic Stress Disorder"],
		[16,17,22,23,30,31,32,37,39,48,52,56,59,65,82,85,92,94,101,135,150,168,170,196,221,274,277,302,303,305,316,319,327,328,339,347,349,367],
		[2,3,9,49,75,95,125,140],
		[,37,38,40,42,43,45,47,48,50,52,53,55,57,58,60,62,63,65,67,68,70,72,73,75,77,78,80,82,83,85,87,88,90,92,93,95,97,98,100,102,103,105,107,108,110,112,113],
		[,37,39,40,42,43,45,46,48,49,51,52,54,55,57,58,60,61,63,64,66,67,69,71,72,74,75,77,78,80,81,83,84,86,87389,90,92,93,95,96,98,99,101,103,104,106,107]
	],[
		[,"PS","Post-traumatic Stress Disorder"],
		[17,21,22,31,32,37,38,44,48,56,59,65,85,94,116,135,145,150,168,170,180,218,221,273,274,277,299,301,304,305,311,316,319,325,328,377,386,400,463,464,469,471,475,479,515,516,565],
		[3,9,45,75,95,141,165,208,223,280,372,405,564],
		[,37,38,39,41,42,43,44,46,47,48,49,51,52,53,54,56,57,58,59,61,62,63,64,66,67,68,69,71,72,73,74,76,77,78,79,81,82,83,84,86,87,88,89,91,92,93,94,96,97,98,99,101,102,103,104,106,107,108,110,111,112],
		[,37,38,39,40,41,42,43,45,46,47,48,49,50,51,52,54,55,56,57,58,59,60,61,62,63,64,66,68,69,70,71,73,74,75,76,77,78,79,80,81,83,84,85,86,87,88,89,90,92,93,94,95,97,98,99,100,102,103,104]
	],[
		[,"D-O","Depression, Obvious"],
		[15,18,31,38,39,46,56,73,92,127,130,146,147,170,175,215,233],
		[2,9,10,20,33,43,45,49,75,95,109,118,140,141,142,165,188,223,245,248,260,330],
		[,32,34,37,39,41,44,46,48,51,53,55,58,60,62,65,67,69,72,74,76,79,81,83,86,88,90,93,95,97,100,102,104,107,109,111,114,116,118,120],
		[,32,34,36,38,40,42,44,46,48,51,53,55,57,59,61,63,65,67,69,71,73,75,77,79,81,83,85,87,89,92,94,96,98,100,102,104,106,108,110,112]
	],[
		[,"D-S","Depression, Subtle"],
		[5,117,282],
		[29,37,55,68,76,134,143,148,178,189,212,221,226,238,267],
		[,,,,,,,32,36,40,44,48,52,55,59,63,67,71,75,78],
		[,,,,,,,,32,36,40,44,48,53,57,61,65,69,73,77]
	],[
		[,"Hy-O","Hysteria, Obvious"],
		[11,18,31,39,40,44,65,101,166,172,175,218],
		[2,3,8,9,10,45,47,91,95,115,125,141,152,159,164,173,179,208,224,249],
		[,37,40,42,45,48,51,53,56,59,62,64,67,70,73,76,78,81,84,87,89,92,95,98,100,103,106,109,111,114,117,120],
		[,37,39,41,44,46,48,51,53,56,58,60,63,65,67,70,72,75,77,79,82,84,86,89,91,93,96,98,101,103,105,108,110,112]
	],[
		[,"Hy-S","Hysteria, Subtle"],
		[230],
		[7,14,26,29,58,76,81,98,110,116,124,129,135,148,151,157,161,167,176,185,193,213,241,243,253,263,265],
		[,,,,,,,,,31,34,36,38,41,43,45,47,50,52,54,57,59,61,64,66,68,71,73,75,78],
		[,,,,,,,,,,32,34,37,39,42,44,47,49,51,54,56,59,61,64,66,69,71,73,76,78]
	],[
		[,"Pd-O","Psychopathic Deviate, Obvious"],
		[17,22,31,32,35,42,52,54,56,71,82,94,99,105,195,202,225,259,264,288],
		[9,12,34,79,95,125,261,266],
		[,34,36,39,42,44,47,50,52,55,58,60,63,66,68,71,74,76,79,82,84,87,90,92,95,98,100,103,106,108],
		[,35,38,41,44,46,49,52,54,57,60,62,65,68,70,73,76,79,81,84,87,89,92,95,97,100,103,105,108,111]
	],[
		[,"Pd-S","Psychopathic Deviate, Subtle"],
		[21,89,113,219],
		[70,83,122,129,143,157,158,160,167,171,185,209,214,217,226,243,263,267],
		[,,,,,,,33,37,41,45,48,52,56,60,64,68,72,76,79,83,87,91,95],
		[,,,,,,,31,35,39,43,47,51,55,59,63,67,71,75,79,83,87,91,95]
	],[
		[,"Pa-O","Paranoia, Obvious"],
		[17,22,23,24,42,99,138,144,146,162,234,259,277,285,305,307,333,336,355,361],
		[255,266,314],
		[,38,43,47,52,57,61,66,70,75,80,84,89,93,98,102,107,112,116],
		[,38,42,47,51,55,60,64,68,72,77,81,85,90,94,98,103,107,111,115,120]
	],[
		[,"Pa-S","Paranoia, Subtle"],
		[16,113,145,271,334],
		[81,95,98,100,104,110,244,283,284,286,297,315],
		[,,,,31,35,39,43,48,52,56,60,65,69,73,77,82,86,90],
		[,,,,31,35,39,44,48,52,57,61,65,69,74,78,82,87,91]
	],[
		[,"Ma-O","Hypomania, Obvoius"],
		[15,23,50,61,85,87,145,155,168,182,190,205,218,227,229,238,242,250,253,269],
		[100,106,107],
		[,,30,34,37,40,44,47,51,54,57,61,64,67,71,74,78,81,84,88,91,95,98,101,105],
		[,,32,35,39,42,45,49,52,55,59,62,66,69,72,76,79,82,86,89,92,96,99,103,106]
	],[
		[,"Ma-S","Hypomania, Subtle"],
		[13,21,55,98,113,122,131,169,200,206,211,212,220,244,248],
		[88,93,136,154,158,167,243,263],
		[,,,,,,31,35,39,42,46,50,54,57,61,65,69,72,76,80,83,87,91,95,98],
		[,,,,,,32,36,40,44,47,51,55,59,63,67,70,74,78,82,86,90,93,97,101]
	],[
		["RCd","dem","Demoralization"],
		[31,56,64,73,82,94,130,180,215,233,273,277,339,400,411,464,469,482,485,491,505,554],
		[95,388],
		[,37,42,47,50,52,54,56,57,58,60,62,64,66,68,70,71,73,75,77,79,81,83,85,86,88],
		[,36,41,45,48,50,52,53,54,55,56,58,60,61,63,65,67,69,71,73,75,77,79,81,83,85]
	],[
		["RC1","som","Somatic Complaints"],
		[11,18,28,40,97,101,111,149,172,247,536],
		[2,8,20,47,57,91,106,141,164,176,177,179,208,224,255,295],
		[,37,43,48,52,55,58,60,63,65,68,71,73,76,79,81,84,86,89,92,94,97,100],
		[,36,41,45,49,52,55,57,59,62,64,66,68,70,72,74,76,78,80,82,85,87,89,91,93,95,97,99,100]
	],[
		["RC2","lpe","Low Positive Emotions"],
		[],
		[9,10,49,61,75,109,148,188,206,239,244,280,318,330,494,521,552],
		[,34,39,43,46,50,53,57,60,64,68,72,75,79,83,86,90,94,97],
		[,33,38,42,46,50,54,58,62,66,70,74,79,83,87,91,95,99,100]
	],[
		["RC3","cyn","Cynicism"],
		[58,76,81,104,110,241,254,284,286,352,436,445,538,563,567],
		[],
		[,34,38,41,43,45,47,48,50,53,56,60,64,69,74,78,83],
		[,33,38,41,44,46,48,50,52,55,58,62,66,70,74,78,82]
	],[
		["RC4","asb","Antisocial Behavior"],
		[21,35,84,105,202,240,264,362,379,412,431,487,489,511,540,548],
		[34,83,160,266,429,455],
		[,33,37,41,44,47,49,52,54,57,59,62,65,68,71,74,77,80,83,86,89,92,95,98],
		[,35,40,44,48,52,55,58,60,63,66,69,71,74,77,80,83,85,88,91,94,96,99,100]
	],[
		["RC6","per","Ideas of Persecution"],
		[24,42,99,138,144,145,162,216,228,259,333,336,355,361,484,490],
		[314],
		[,41,56,62,65,67,70,73,76,79,82,85,88,90,93,96,99,100],
		[,43,58,64,67,70,73,76,79,82,85,88,91,94,97,99,100]
	],[
		["RC7","dne","Dysfunctional Negative Emotions"],
		[37,127,161,251,274,289,301,302,310,320,327,328,329,390,421,424,430,442,451,463,471,507,513,519],
		[],
		[,34,38,42,45,47,49,52,54,56,58,60,63,65,67,70,72,75,77,80,82,85,87,90,92,95],
		[,32,36,40,42,45,47,49,50,52,54,55,58,60,63,65,68,71,74,76,79,82,84,87,90,92]
	],[
		["RC8","abx","Aberrant Experiences"],
		[32,60,72,96,168,182,198,229,296,298,307,311,316,319,466,508,551],
		[427],
		[,39,47,52,56,59,63,66,70,73,76,80,83,87,90,93,97,100],
		[,39,47,52,56,60,63,66,69,73,76,79,82,85,89,92,95,98,100]
	],[
		["RC9","hpm","Hypomanic Activation"],
		[27,50,55,86,122,134,153,169,189,209,212,213,226,242,250,267,304,324,345,346,366,389,393,406,414,423,542],
		[100],
		[,30,30,31,33,36,38,39,41,42,44,45,47,48,50,51,53,56,58,61,64,67,70,73,76,79,82,85,88,91],
		[,30,30,32,34,37,38,40,42,44,46,48,49,51,53,56,58,61,64,66,69,72,74,77,80,83,85,88,91,94]
	],[
		[,"AGGR","Aggressiveness"],
		[27,50,85,134,239,323,324,346,350,358,414,423,452,521,548],
		[70,446,503],
		[,,30,33,36,38,40,43,45,48,51,54,59,64,69,74,79,84,89,94],
		[,30,32,35,38,41,44,46,49,53,57,61,66,71,76,81,86,91,96,101]
	],[
		[,"PSYC","Psychoticism"],
		[24,42,48,72,96,99,138,144,198,241,259,315,319,336,355,361,374,448,466,490,508,549,551],
		[184,427],
		[,35,40,45,49,52,56,59,62,65,68,72,75,78,81,84,88,91,94,97,101,104,107,110,114,117,120],
		[,35,41,46,50,53,56,60,63,66,69,72,75,78,81,84,87,90,93,96,99,103,106,109,112,115,118]
	],[
		[,"DISC","Disconstraint"],
		[35,84,88,103,105,123,209,222,250,284,344,362,385,412,417,418,431,477],
		[34,100,121,126,154,263,266,309,351,402,497],
		[,,,,,30,31,33,35,37,39,41,42,44,46,49,51,54,57,60,64,67,71,75,78,82,82,89,93,96,100],
		[,,,30,31,34,37,39,42,44,46,49,51,54,56,60,63,66,69,73,76,79,83,86,89,93,96,99,102,106,109]
	],[
		[,"NEGE","Negative Emotionality / Neuroticism"],
		[37,52,82,93,116,166,196,213,290,301,305,329,375,389,390,395,397,407,409,415,435,442,444,451,513,542,556],
		[63,223,372,405,496,564],
		[,31,34,36,39,41,43,44,46,48,49,51,52,54,56,57,59,61,64,66,68,70,72,74,76,78,80,82,84,86,89,91,93,95,97],
		[,30,31,34,36,38,40,42,44,45,46,48,49,50,52,53,55,57,59,61,63,66,68,70,72,75,77,79,81384,86,88,90,93,95]
	],[
		[,"INTR","Introversion / Low Positive Emotionality"],
		[38,56,233,515,517],
		[9,49,61,75,78,86,95,109,131,174,188,189,207,226,231,244,267,318,330,340,342,343,353,356,359,370,460,531,534],
		[,,30,31,33,35,37,39,41,43,45,48,50,52,54,56,59,61,64,66,68,71,73,76,78,80,83,85,88,90,92,95,97,100,102,105],
		[,,,30,32,34,37,39,42,44,46,48,50,53,55,57,60,63,65,68,70,73,76,78,81,83,86,89,91,94,96,99,102,104,107,109]
	],[
		[,"FRS1","Generalized Fearfulness"],
		[317,322,329,334,395,435,441,447,468,471,555],
		[186],
		[,44,53,62,71,80,89,98,107,113,120],
		[,42,48,55,61,68,74,81,88,94,101,107]
	],[
		[,"FRS2","Multiple Fears"],
		[154,392,438,458],
		[115,163,385,401,453,462],
		[,37,41,45,50,54,59,63,67,72,76,81],
		[,30,33,37,41,45,49,53,58,62,66,70]
	],[
		[,"DEP1","Lack of Drive"],
		[38,71,92,399,400,512,516,539,554],
		[3,9,75],
		[,40,46,51,57,62,68,73,79,84,89,95,100,106],
		[,40,45,50,55,60,65,70,75,80,85,90,95,100]
	],[
		[,"DEP2","Dysphoria"],
		[56,65,146,215],
		[95,388],
		[,42,50,58,66,74,82,90],
		[,40,47,53,60,66,73,79]
	],[
		[,"DEP3","Self-Depreciation"],
		[52,82,130,234,246,377,411],
		[],
		[,41,48,55,62,69,76,83,91],
		[,40,47,54,61,68,75,82,89]
	],[
		[,"DEP4","Suicidal Ideation"],
		[303,454,506,520,546],
		[],
		[,45,62,79,95,112,120],
		[,45,61,77,93,109,120]
	],[
		[,"HEA1","Gastrointestinal Symptoms"],
		[18,59,111],
		[20,47],
		[,44,57,70,83,96,109],
		[,43,54,64,75,86,97]
	],[
		[,"HEA2","Neurological Symtoms"],
		[44,53,101,149,247],
		[91,142,159,164,179,255,295],
		[,40,47,54,60,67,74,80,87,94,100,107,114,120],
		[,39,45,50,56,61,67,72,78,83,89,94,99,105]
	],[
		[,"HEA3","General Health Concerns"],
		[175],
		[33,45,118,141,224],
		[,40,48,56,64,72,81,89],
		[,40,48,56,64,71,79,87]
	],[
		[,"BIZ1","Psychotic Symptomatology"],
		[24,60,96,138,162,228,336,355,361,508,551],
		[],
		[,44,54,64,74,84,94,104,114,120],
		[,44,54,65,76,86,97,108,118,120]
	],[
		[,"BIZ2","Schizotypal Characteristics"],
		[32,259,298,311,316,319,333,466,543],
		[],
		[,41,47,54,60,67,73,80,86,93,99],
		[,41,47,54,60,66,72,79,85,91,97]
	],[
		[,"ANG1","Explosive Behavior"],
		[37,134,389,414,540,548],
		[564],
		[,39,45,52,58,64,71,77,83],
		[,39,47,54,61,69,76,84,91]
	],[
		[,"ANG2","Irritability"],
		[116,302,430,461,486,513,542],
		[],
		[,35,41,46,51,56,61,67,72],
		[,33,39,44,49,54,59,65,70]
	],[
		[,"CYN1","Misanthropic Beliefs"],
		[58,76,81,104,110,241,254,283,284,286,352,374,399,470,538],
		[],
		[,33,36,39,41,44,47,50,52,55,58,60,63,66,69,71,74],
		[,34,37,40,42,45,48,51,54,56,59,62,65,68,70,73,76]
	],[
		[,"CYN2","Interpersonal Suspiciousness"],
		[50,124,225,315,346,358,403,445],
		[],
		[,34,39,43,48,53,57,62,66,71],
		[,35,40,45,49,54,59,64,68,73]
	],[
		[,"ASP1","Antisocial Attitudes"],
		[26,66,81,104,110,123,227,248,250,254,269,283,284,374,418,419],
		[],
		[,32,35,37,40,43,46,49,52,55,57,60,63,66,69,72,75,79],
		[,33,36,39,42,45,48,52,55,58,61,64,67,70,73,76,79,82]
	],[
		[,"ASP2","Antisocial Behavior"],
		[35,84,105,412],
		[266],
		[,38,45,52,59,67,74],
		[,42,51,61,71,81,90]
	],[
		[,"TPA1","Impatience"],
		[302,420,430,507,523,535],
		[],
		[,34,39,45,51,57,63,68],
		[,34,40,46,52,58,64,70]
	],[
		[,"TPA2","Competitive Drive"],
		[27,151,212,358,419,423,510,531,545],
		[],
		[,33,39,44,50,55,60,66,71,77,82],
		[,34,40,46,52,58,64,70,76,82,89]
	],[
		[,"LSE1","Self-Doubt"],
		[73,130,326,411,450,483,485,504],
		[61,78,109],
		[,39,44,49,54,59,64,70,75,80,85,90,95],
		[,39,43,48,53,57,62,66,71,75,80,85,89]
	],[
		[,"LSE2","Submissiveness"],
		[70,369,421,457,503,519],
		[],
		[,41,48,55,62,69,76,83],
		[,39,45,51,57,63,69,75]
	],[
		[,"SOD1","Introversion"],
		[46,265,281,337,349,367,480,515],
		[49,86,280,340,353,359,363,370],
		[,36,39,42,45,47,50,53,56,59,62,65,68,71,73,76,79,82],
		[,37,40,43,46,49,52,55,58,61,64,67,70,73,76,79,82,85]
	],[
		[,"SOD2","Shyness"],
		[158,167,185,275],
		[262,321,360],
		[,36,41,47,52,58,63,68,74],
		[,35,40,45,50,55,60,65,69]
	],[
		[,"FAM1","Family Discord"],
		[21,54,190,205,256,323,378,382,449,478,563],
		[83],
		[,35,40,45,50,55,60,65,70,75,80,85,90,95],
		[,33,38,42,47,52,57,62,67,71,76,81,86,91]
	],[
		[,"FAM2","Familial Alienation"],
		[195,550],
		[217,383,455],
		[,40,49,58,67,76,84],
		[,41,50,59,68,77,86]
	],[
		[,"TRT1","Low Motivation"],
		[92,364,368,376,491,497,500,528,539,554],
		[494],
		[,42,48,54,60,66,71,77,83,89,95,101,107],
		[,41,46,51,56,61,66,71,76,81,86,91,96]
	],[
		[,"TRT2","Inability to Disclose"],
		[274,373,375,391,495],
		[],
		[,37,45,52,60,68,75],
		[,38,46,53,60,68,75]
	],[
		// Unused, Scale Name, Scale Description
		[,"KB1","Koss-Butcher Critical Items - Acute Anxiety Scale"],
		// True questions
		[5,15,28,39,59,172,218,301,444,463,469],
		// False questions
		[2,3,10,140,208,223],
		// T scales are undefined to flag this as a critical item
		,
		,
	],[
		[,"KB2","Koss-Butcher Critical Items - Depressed Suicidal Ideation"],
		[38,65,71,92,130,146,215,233,273,303,306,411,454,485,506,518,520,524],
		[9,75,95,388],
		,
		,
	],[
		[,"KB3","Koss-Butcher Critical Items - Threatened Assault"],
		[37,85,134,213,389],
		[],
		,
		,
	],[
		[,"KB4","Koss-Butcher Critical Items - Situational Stress Due to Alcoholism"],
		[264,487,489,502,511,518],
		[125],
		,
		,
	],[
		[,"KB5","Koss-Butcher Critical Items - Mental Confusion"],
		[24,31,32,72,96,180,198,299,311,316,325],
		[],
		,
		,
	],[
		[,"KB6","Koss-Butcher Critical Items - Persecutory Ideas"],
		[17,42,99,124,138,144,145,162,216,228,241,251,259,333,361],
		[314],
		,
		,
	],[
		[,"LW1","Lachar-Wrobel Critical Items - Anxiety and Tension"],
		[15,17,172,218,299,301,320,463],
		[223,261,405],
		,
		,
	],[
		[,"LW2","Lachar-Wrobel Critical Items - Depression and Worry"],
		[65,73,130,150,180,273,303,339,411,415,454],
		[2,3,10,75,165],
		,
		,
	],[
		[,"LW3","Lachar-Wrobel Critical Items - Sleep Disturbance"],
		[5,30,39,328,471],
		[140],
		,
		,
	],[
		[,"LW4","Lachar-Wrobel Critical Items - Deviant Beliefs"],
		[42,99,138,144,162,216,228,259,333,336,355,466],
		[106,314],
		,
		,
	],[
		[,"LW5","Lachar-Wrobel Critical Items - Deviant Thinking and Experiences"],
		[32,60,96,122,198,298,307,316,319,427],
		[],
		,
		,
	],[
		[,"LW6","Lachar-Wrobel Critical Items - Substance Abuse"],
		[168,264],
		[429],
		,
		,
	],[
		[,"LW7","Lachar-Wrobel Critical Items - Antisocial Attitude"],
		[27,35,84,105,227,240,254,324],
		[266],
		,
		,
	],[
		[,"LW8","Lachar-Wrobel Critical Items - Family Conflict"],
		[21,288],
		[83,125],
		,
		,
	],[
		[,"LW9","Lachar-Wrobel Critical Items - Problematic Anger"],
		[85,134,213,389],
		[],
		,
		,
	],[
		[,"LW10","Lachar-Wrobel Critical Items - Sexual Concern and Deviation"],
		[62,166,268],
		[12,34,121],
		,
		,
	],[
		[,"LW11","Lachar-Wrobel Critical Items - Somatic Symptoms"],
		[18,28,40,44,53,57,59,101,111,175,182,229,247,464],
		[33,47,142,159,164,176,224,255,295],
		,
		,
	]
];
