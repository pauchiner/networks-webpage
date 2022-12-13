import { Container, Badge } from "@chakra-ui/react";
import { Title, EntryImage } from "../../components/entry";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Entry = () => (
  <Layout title="Example">
    <Container>
      <EntryImage src="/images/example.jpg" alt="example" />
      <Title themeId={1}>
        Example <Badge colorScheme="green">new</Badge>
      </Title>
      <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Condimentum lacinia
        quis vel eros donec ac odio tempor. Amet tellus cras adipiscing enim eu
        turpis egestas pretium. Congue nisi vitae suscipit tellus mauris.
        Adipiscing enim eu turpis egestas pretium aenean pharetra. Nisl nunc mi
        ipsum faucibus vitae aliquet nec ullamcorper. Sit amet venenatis urna
        cursus eget nunc. Pulvinar neque laoreet suspendisse interdum
        consectetur libero id faucibus nisl. Quam adipiscing vitae proin
        sagittis nisl rhoncus mattis rhoncus. Turpis egestas integer eget
        aliquet nibh praesent tristique. Enim sed faucibus turpis in eu mi
        bibendum. At auctor urna nunc id. Hac habitasse platea dictumst
        vestibulum. Cras sed felis eget velit aliquet sagittis. Dolor sit amet
        consectetur adipiscing elit ut aliquam. Ac turpis egestas sed tempus
        urna et pharetra pharetra massa. Lacus luctus accumsan tortor posuere
        ac. Vel eros donec ac odio tempor. Erat nam at lectus urna duis.
        Sollicitudin tempor id eu nisl nunc. Lorem ipsum dolor sit amet.
        Curabitur vitae nunc sed velit dignissim sodales. Interdum consectetur
        libero id faucibus nisl. Penatibus et magnis dis parturient montes
        nascetur. Orci phasellus egestas tellus rutrum tellus pellentesque. Nec
        ullamcorper sit amet risus nullam eget. Sagittis nisl rhoncus mattis
        rhoncus urna neque viverra. Tincidunt ornare massa eget egestas purus
        viverra accumsan in nisl. Quis lectus nulla at volutpat. Fermentum dui
        faucibus in ornare quam viverra. Eget duis at tellus at urna
        condimentum. Lorem ipsum dolor sit amet consectetur adipiscing. Nibh
        praesent tristique magna sit amet purus. Feugiat vivamus at augue eget
        arcu. Mi bibendum neque egestas congue quisque egestas diam in. Duis
        tristique sollicitudin nibh sit amet commodo nulla. Pretium vulputate
        sapien nec sagittis aliquam malesuada bibendum arcu vitae. Turpis in eu
        mi bibendum neque. Semper eget duis at tellus at urna condimentum
        mattis. Varius quam quisque id diam. Ullamcorper sit amet risus nullam
        eget felis eget. Tempus egestas sed sed risus pretium quam. Diam
        volutpat commodo sed egestas egestas fringilla phasellus faucibus
        scelerisque. Amet luctus venenatis lectus magna. Nisi est sit amet
        facilisis. Vestibulum sed arcu non odio euismod lacinia. Aliquet
        sagittis id consectetur purus ut faucibus pulvinar elementum. In
        fermentum et sollicitudin ac orci phasellus. Neque sodales ut etiam sit
        amet nisl purus in mollis. Consequat mauris nunc congue nisi vitae
        suscipit. Sit amet luctus venenatis lectus magna fringilla. Lacus vel
        facilisis volutpat est velit egestas. Vulputate ut pharetra sit amet
        aliquam. Viverra suspendisse potenti nullam ac tortor vitae purus. Massa
        ultricies mi quis hendrerit. Iaculis eu non diam phasellus vestibulum
        lorem. Bibendum enim facilisis gravida neque. Mi in nulla posuere
        sollicitudin aliquam ultrices sagittis orci. Elit duis tristique
        sollicitudin nibh. Tellus in metus vulputate eu scelerisque. In ornare
        quam viverra orci sagittis eu volutpat. Dolor sit amet consectetur
        adipiscing elit pellentesque. Vitae semper quis lectus nulla at. Ut
        placerat orci nulla pellentesque dignissim enim sit. Amet aliquam id
        diam maecenas ultricies. Pretium nibh ipsum consequat nisl vel pretium
        lectus quam. Egestas integer eget aliquet nibh praesent tristique magna
        sit amet. Diam sollicitudin tempor id eu nisl nunc mi ipsum. Ultrices
        sagittis orci a scelerisque. Sodales neque sodales ut etiam sit.
        Interdum varius sit amet mattis vulputate. Nec sagittis aliquam
        malesuada bibendum arcu vitae elementum. Nibh praesent tristique magna
        sit amet purus gravida quis blandit. Dictum at tempor commodo
        ullamcorper a lacus vestibulum sed arcu. At imperdiet dui accumsan sit
        amet nulla facilisi morbi tempus. Nulla pellentesque dignissim enim sit
        amet venenatis. Est placerat in egestas erat imperdiet sed euismod. Est
        pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Nullam
        eget felis eget nunc lobortis mattis aliquam. Arcu non sodales neque
        sodales ut. Faucibus scelerisque eleifend donec pretium vulputate
        sapien. Gravida neque convallis a cras semper auctor neque. Tristique
        senectus et netus et malesuada.
      </P>
    </Container>
  </Layout>
);

export default Entry;
