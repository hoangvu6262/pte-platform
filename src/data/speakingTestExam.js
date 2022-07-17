const text = `782 Information Office
781 Distance Learning
780 Eagles
779 Sociological Thought
778 Graduate Admission School
777 Central Aim
776 Regular Exercise
775 Medical Digitalization
774 Walking Tour
773 Infant Brain
772 Primitive Men
771 Venture Capitals
770 Smart Cities
769 Belt and Road Initiative
768 Two-pronged Policy
765 Hong Kong Development
767 Consultants
766 Standardization
764 Satellite Imagery`;

const splitText = (text, key, part) => {
  const data = text.split("\n");
  const list = [];

  for (let i = 0; i < data.length; i++) {
    const item = {
      id: i,
      key: key,
      part: part,
      code: data[i].split(" ")[0],
      name: data[i],
    };

    list.push(item);
  }
  return list;
};

// console.log(listReadAloud);

export const listReadAloud = splitText(text, "s1", "read_aloud");

const repeatSentence = `1662 RS
1661 RS
1660 RS
1659 RS
1658 RS
1657 RS
1656 RS
1655 RS
1654 RS
1652 RS
1651 RS
1650 RS
1649 RS
1648 RS
1647 RS
1646 RS
1645 RS
1644 RS
1643 RS
1642 RS
1641 RS
1640 RS
1639 RS
1638 RS
1637 RS
1636 RS
1635 RS
1633 RS
1632 RS
1634 RS
1631 RS
1628 RS
1629 RS
1627 RS
1630 RS
1623 RS
1626 RS
1625 RS
1622 RS
1624 RS`;

export const listRepeatSentence = splitText(
  repeatSentence,
  "s2",
  "repeat_sentence"
);

const DescribeIamge = `715 Points of View
714 Production Map
713 Diamond Production
712 Airline Passengers
711 Working Hours
710 Cultural Websites
709 Flu Vaccination
708 Rock Cycle
707 Past v.s. Present
706 Street View
705 Business Economy
704 Car Spare
703 Legolas’s Marks
702 Whale and Car
701 Animal Length
700 Less Developed Countries
699 Remote Work
698 Ecosystems
697 Energy Pyramid
696 Trailing Sails
695 Desalination Experiment
694 Sun and Plant
693 Healthy Food Pyramid
692 Vehicle Sales
691 Company Sales Strategy
690 Man at Desk
689 Nominal GDP
688 Real Estate Taxes
687 Death Rates
686 Fog
685 Table and Chairs
684 Greenhouse Gas
683 Blood Flow
682 NHS England staff
681 Suicide in England
680 Chocolate Consumers
679 Climate Region
678 Stress Curve
677 Learning Process
676 Fast Food Consumption
675 Worldwide Incidence`;

export const listDescribeImage = splitText(
  DescribeIamge,
  "s3",
  "describe_image"
);

const reTellLecture = `466 Stress and Memory
465 Ecological Balance
464 Camel Fat
463 Route Planning of Airlines
462 Coral Reefs
461 Alopecia Areata
460 Time Paradox
459 Genie
458 Problem with Over-achievement
457 Diplomas
456 Learning and Performance
454 Pain
453 Poor Posture
452 Weight Loss
451 Memorizing while Sleeping
450 Prescriptive and Descriptive
449 Stock Market
447 Listening to Employees
446 Inflation and Deflation
445 Sartre's Theory
444 Night Light
443 Water that Dissolves
442 Apple Cider Vinegar
441 Oversleeping
440 Birds that Talk
439 Wildlife Adaptation
438 Benefits of Blueberries
437 Doing Team-related Sports
436 Sleep Deprivation
435 Metallic Glass
434 Drinking Water on Mars
433 Best Thoughts
432 Aphasia
431 Hibernation
430 Turing Test
428 Power of Simple Word
427 Being Curious
426 Doing Hard Things
401 Cancer Cells
400 Endowment Effect`;

export const listRetellLecture = splitText(
  reTellLecture,
  "s4",
  "re-tell_lecture"
);

const ansShortQes = `1451 ASQ
1450 ASQ
1449 ASQ
1448 ASQ
1447 ASQ
1446 ASQ
1445 ASQ
1444 ASQ
1443 ASQ
1442 ASQ
1441 ASQ
1440 ASQ
1439 ASQ
1438 ASQ
1437 ASQ
1436 ASQ
1435 ASQ
1434 ASQ
1433 ASQ
1432 ASQ
1431 ASQ
1430 ASQ
1429 ASQ
1428 ASQ
1427 ASQ
1426 ASQ
1425 ASQ
1424 ASQ
1423 ASQ
1422 ASQ
1421 ASQ
1420 ASQ
1419 ASQ
1418 ASQ
1417 ASQ
1416 ASQ
1415 ASQ
1414 ASQ
1413 ASQ
1411 ASQ`;

export const listAnsShortQues = splitText(
  ansShortQes,
  "s5",
  "answer_short_question"
);

export const listSpeaking = [
  ...listReadAloud,
  ...listRepeatSentence,
  ...listDescribeImage,
  ...listRetellLecture,
  ...listAnsShortQues,
];
